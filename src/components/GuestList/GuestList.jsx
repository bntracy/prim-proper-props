import Guest from '../Guest/Guest';

function GuestList(props) {


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
                        <Guest key={guest.id} guest={guest} getGuests={props.getGuests}/>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default GuestList;