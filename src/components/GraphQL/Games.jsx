import GameCard from "@/components/GraphQL/GameCard.jsx";
import { deleteGame, getGames } from "@/api/games.js";
import { useMutation, useQuery } from "@apollo/client";
import { ChaoticOrbit } from "@uiball/loaders";
import { Toaster } from "@/components/ui/toaster.jsx";
import { useToast } from "@/components/ui/use-toast";
import AddGame from "@/components/GraphQL/AddGame.jsx";

const Games = () => {
  const { loading, error, data } = useQuery(getGames);
  const [deleteMutation] = useMutation(deleteGame);
  const { toast } = useToast();

  const handleDelete = async (id) => {
    await deleteMutation({
      variables: { deleteGameId: id },
      onCompleted: (apiResponse) => {
        const response = apiResponse.deleteGame?.response;
        if (response.success) data.games = data?.games?.filter((item) => item.id !== id);
        toast(
          response.success
            ? {
                description: response.message
              }
            : {
                variant: "destructive",
                description: response.message
              }
        );
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          description: error.message
        });
      }
    });
  };

  return loading ? (
    <div className={"flex h-full flex-col items-center justify-center"}>
      <ChaoticOrbit size={40} speed={1.7} color={"hsl(var(--foreground))"} />
    </div>
  ) : error ? (
    <div className={"flex h-full flex-col items-center justify-center"}>
      <p className={"capitalize text-red-600"}>{`${error.message}!`}</p>
    </div>
  ) : (
    <div
      className={
        "mt-8 grid h-auto grid-cols-1 place-content-start gap-y-10 px-8 md:grid-cols-2 md:grid-cols-4 2xl:h-full 2xl:grid-cols-5"
      }
    >
      <div className={"flex justify-center"}>
        <AddGame toast={toast} data={data} />
      </div>
      {data?.games?.length > 0 ? (
        data?.games?.map((game) => (
          <div key={game.id} className={"flex justify-center"}>
            <GameCard id={game.id} title={game.title} handleDelete={handleDelete} />
          </div>
        ))
      ) : (
        <div className={"flex justify-center"}>
          <GameCard variant={"empty"} />
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default Games;
