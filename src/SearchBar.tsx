import { useState, useEffect } from "react"


const SearchBar = ({ options }: any) => {

    const [search, setSearch] = useState('')
    const [selected, setSelected] = useState([] as any)
    const [filteredOption, setFilteredOption] = useState([] as any)
    const [showOption, setShowOption] = useState(false)

    useEffect(() => {
        setFilteredOption((filteredOption: any) => [...filteredOption, ...options])
    }, [])

    useEffect(() => {
        if (selected.length === 0) return
        filteredOption.map((e: any, i: number) => {
            if (e.name === selected[selected.length - 1].name) {
                filteredOption.splice(i, 1)
            }
        }
        )
    }, [selected])

    const selectHandler = (list: any) => {
        setSelected((selected: any) => [...selected, list])
        setShowOption(false)
    }

    const inputHandler = (event: any) => {
        setShowOption(true)
        setSearch(event.target.value)
    }

    const deleteHandler = (e: any) => {
        selected.map((el: any, i: number) => {
            if (el.name === e.name) {
                selected.splice(i, 1)
            }
        }
        )
        setSelected([...selected])

    }

    return (
        <div className="w-full md:w-8/12 xl:w-6/12 mx-auto mt-10">
            <div className="flex items-center justify-between border border-gray-200 p-4  rounded-md shadow-md">
                <div className="flex space-x-2 items-center">
                    <span className="flex space-x-2">{selected && selected.map((selectItem: any) => (
                        <div key={selectItem.code} className="px-2 py-1 text-gray-600 bg-gray-200 rounded-md cursor-pointer hover:bg-red-200">{selectItem.name} <span className="font-bold" onClick={() => deleteHandler(selectItem)}>&times;</span></div>
                    ))}</span>
                    <input className="outline-0" placeholder="Search..." onChange={(event) => inputHandler(event)} />
                </div>

                <div className="flex space-x-4 ">

                    <button className="text-2xl" onClick={() => {
                        setSelected([])
                        setFilteredOption(() => [...options])
                    }}>
                        <img src="https://cdn.iconscout.com/icon/free/png-24/close-1912235-1617704.png" alt="close" />
                    </button>

                    <span className="w-0.5 h-6 bg-gray-200"></span>


                    <button onClick={() => setShowOption(!showOption)} className="flex items-center">
                        <img src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-4/24/dropdown_arrow-24.png" alt="dropdown" />
                    </button>


                </div>
            </div>

            <ul className={`border border-gray-200 p-4 mt-4 rounded-xl shadow-sm ${showOption === true ? 'block' : 'hidden'}`}>
                {
                    filteredOption.filter((filter: any) => {
                        return filter.name.toLowerCase().includes(search)
                    }).map((list: any) => (
                        <li className={`py-2 px-4 bg-color-transparent rounded-md font-semibold text-gray-900 hover:bg-gray-200 cursor-pointer`} key={list.code} onClick={() => selectHandler(list)}>{list.name}</li>
                    ))
                }
            </ul>


        </div >
    )
}

export default SearchBar