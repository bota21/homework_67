import './NotesForm.css';

const NotesForm = props => {
    return (
        <form onSubmit={props.submit}>
            <div className='NotesForm'>
                <textarea
                    onChange={props.change}
                    value={props.value}
                    name={props.name}
                    className='textarea_notes'></textarea>
                <button className='button_notes'>Add</button>
            </div>
        </form>

    )
}

export default NotesForm