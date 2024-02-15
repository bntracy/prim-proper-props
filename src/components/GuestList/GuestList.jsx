function GuestList(props) {
    const deleteGuest = (id) => {
        console.log('Delete guest with id', id);
    }

    return (
        <>
            <h2>Guest List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Kid's Meal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.guestList.map(guest => (
                        <tr key={guest.id}>
                            <td>{guest.name}</td>
                            <td>{String(guest.kidsMeal)}</td>
                            <td><button onClick={() => {deleteGuest(guest.id)}}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default GuestList;