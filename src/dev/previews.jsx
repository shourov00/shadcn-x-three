import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import App from "@/App.jsx";
import { ModeToggle } from "@/layouts/Theme/ModeToggle.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
          <ComponentPreview path="/ModeToggle">
            <ModeToggle />
          </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews