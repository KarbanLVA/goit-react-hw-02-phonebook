export default function Filter ({filter, handleChange, filteredContact}) {    
    return (
        <div>
            <p>Find contact by name</p>
            <input type="text" name="filter" value={filter} onChange={handleChange}/>                     
        </div>
    )

  
}