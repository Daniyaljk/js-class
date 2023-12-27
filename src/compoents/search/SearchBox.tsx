import {FormEvent, useState} from "react";


interface SearchBoxProps {
    onSubmit: Function
}

export default function SearchBox({onSubmit}: SearchBoxProps) {
    const [searchVal, setSearchVal] = useState("")

    const searchValTrim = searchVal.trim();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        if (searchValTrim.length > 2) {

            onSubmit(searchValTrim)
        }
    }


    return (
        <form onSubmit={handleSubmit}>

            <input
                type={"text"}
                placeholder={"search..."}
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
            />


            {searchValTrim.length < 3 && (
                <span>Please enter more than 2 characters</span>
            )}

            <button>submit</button>

        </form>
    )
}
