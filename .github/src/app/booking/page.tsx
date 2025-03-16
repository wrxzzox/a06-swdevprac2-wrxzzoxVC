import DateReserve from '@/components/DateReserve'
import { Select, MenuItem, TextField } from '@mui/material'

export default function Booking() {
    return (
        <form action="#" method='POST' className="bg-slate-100 rounded-lg space-y-5 w-[100%] p-10 flex flex-col justify-center items-center">
            <TextField id="name" label="Name-Lastname" name="Name-Lastname" variant='standard'/>
            <TextField id="contact" label="Contact-Number" name="Contact-Number" variant='standard'/>
            <Select variant="standard" name="Bloom" id="venue" className="h-[2em] w-[200px]">
                <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                <MenuItem value="Spark">Spark Space</MenuItem>
                <MenuItem value="GrandTable">The Grand Table</MenuItem>
            </Select>
            <DateReserve/>
            <button name="Book Venue" className="block rounded-md bg-sky-600 hover:bg-indigo-600 p-3 shadow-sm text-white">
                Book Venue
            </button>
        </form>
    )
}