import axios from 'axios';

function Guest(props) {
    const deleteGuest = (id) => {
        // console.log('Delete guest with id', id);
        axios({
            method: 'DELETE',
            url: `/api/guests/${id}`
        }).then(response => {
            props.getGuests();
        }
        ).catch(error => {
            console.log('Error deleting guest', error);
        });
    }

    return (
        <tr>
            <td>{props.guest.name}</td>
            <td>{String(props.guest.kidsMeal)}</td>
            <td><button onClick={() => {deleteGuest(props.guest.id)}}>Delete</button></td>
        </tr>
    );
}

export default Guest;