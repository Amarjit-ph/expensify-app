import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


const now = moment();
console.log('DATE : ' + now.format('Do MMMM Y'));

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? props.expense.amount : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderfocused: false,
            error: ''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderfocused: focused }))

    }

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            // set error state
            const error = "PLEASE PROVIDE AMOUNT AND DESCRIPTION"
            this.setState(() => ({ error }));
        } else {
            this.setState(() => ({ error: '' }));

            console.log("SUBMITTED :");
            console.log(this.state.amount);


            // FOR REDUX STORE TO PROPS
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }

    render() {
        return (


            <form
                className='form'
                onSubmit={this.onSubmit}>

                {this.state.error && <p className="form__error">{this.state.error}</p>}

                <input
                    className="text-input"
                    type="text"
                    placeholder='Discription'
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />

                <input type="number"
                    className="text-input"
                    placeholder='Amount'
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />

                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calenderfocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={(day) => false}
                />

                <textarea
                    className="textarea"
                    placeholder="Add Note for Expense"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                >
                </textarea>
                <div>
                    <button className="button"> SAVE EXPENSE</button>
                </div>


            </form>
        );
    }
}