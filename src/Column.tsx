import { ColumnContainer, ColumnTitle } from "./styles"
import { Card } from "./Card"
import { AddNewItem } from "./AddNewItem"

type ColumnProps = {
    text: string
}

export const Column = ({ text }: ColumnProps) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            <Card text="Generate app scaffold" />
            <Card text="Learn Typescript" />
            <Card text="Begin to use Static typing" />
            <AddNewItem
                toggleButtonText="+ Add another card"
                onAdd={console.log}
                dark
            />
        </ColumnContainer>
    )
}