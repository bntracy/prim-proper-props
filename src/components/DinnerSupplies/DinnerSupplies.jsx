import SilverWare from "../SilverWare/SilverWare";

function DinnerSupplies(props) {
    let count = props.guestList.length;
    return (
        <>
            <h2>Dinner Supplies</h2>
            <SilverWare name="Spoons" count={count} />
            <SilverWare name="Forks" count={count} />
            <SilverWare name="Knives" count={count} />
        </>
    );
}

export default DinnerSupplies;