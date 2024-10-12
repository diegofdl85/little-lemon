import Nav from "./Nav";
import BookingForm from "./BookingForm";

const BookingPage = (props) => {
    return(
        <>
        <Nav/>
        <main>
            <BookingForm
             availableTimes={props.availableTimes}
             dispatch={props.dispatch}
             submitForm={props.submitForm}/>
        </main>
        </>
    );
}

export default BookingPage;