export default function contactList ({items, removeContact}) {    
    const elements = items.map(({name, number, id}) => {
        return <li key={id}>{name} : {number} <button onClick={() => removeContact(id)}>delete</button></li>
    })    
    return (
        <ul>{elements}</ul>
    )
}