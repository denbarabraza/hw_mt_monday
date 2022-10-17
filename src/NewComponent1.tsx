import React from 'react';

type StudentsType = {
    id: number,
    name: string,
    age: number,
}

type NewComponentType = {
    students: Array<StudentsType>,
}

export const NewComponent: React.FC<NewComponentType> = (props) => {
    return (
        <ol>
            {props.students.map((el) => {
                debugger
                return (
                    <li key={el.id}>
                        <span>{el.name}</span>
                        <span> age: {el.age}</span>
                    </li>
                )
            })}
        </ol>
    )
}