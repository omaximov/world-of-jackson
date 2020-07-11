import React from 'react'
import { ITourNode } from './TourBar'
import type { FunctionComponent } from 'react'
import UITheme from 'styled-components'; 

const TourNodeButton = UITheme.button`
    display: inline-block;
    flex-shrink: 1;
    background-color: black;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    transition: box-shadow 0.2s ease-in-out, color 0.5s ease-in-out;
    &:hover {
        box-shadow: inset 0 0 1.5em 1.5em white;
    }

`

const TourButton: FunctionComponent<{ tourNode: ITourNode, handleTourClick: (tourNode: ITourNode) => void
    selectedTourNode: ITourNode | null 
}> =
    ({ tourNode, handleTourClick, selectedTourNode }) => {
        const isSelected = selectedTourNode && selectedTourNode.label === tourNode.label
        return (
                <TourNodeButton key={ tourNode.label }
                    onClick={() => handleTourClick(tourNode)}
                    style={isSelected ? { backgroundColor: 'red' } : {}}
                />
        )
}

export default TourButton

