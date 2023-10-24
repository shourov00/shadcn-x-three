import { useQuery } from "@apollo/client";
import { getGame } from "@/api/games.js";
import Error from "@/pages/Error.jsx";

const Games = () => {
  const { loading, error, data } = useQuery(getGame, {
    variables: { gameId: 2 }
  });

  if (error) return <Error />;

  return (
    <div className={"flex h-full flex-col items-center justify-center"}>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div className={"flex flex-col items-start justify-center gap-4"}>
          <div>
            <p>Title:</p>
            <p className={"rounded-sm border border-primary p-2"}>{data?.game.title}</p>
          </div>
          <div>
            <p>Platforms:</p>
            <div className={"rounded-sm border border-primary p-2"}>
              {data?.game.platform?.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div>
            <p>Reviews:</p>
            {data?.game.reviews?.map((item, index) => (
              <div key={index} className={"rounded-sm border border-primary p-2 mb-3"}>
                <p>{`Rating: ${item?.rating}`}</p>
                <p className={"capitalize"}>{`Author: ${item.author.name}`}</p>
                <p>{`Content: ${item.content}`}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Games;
