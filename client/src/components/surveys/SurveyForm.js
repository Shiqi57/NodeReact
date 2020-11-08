//SurveyFrom shows a form for user
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';
import validEmail from '../../utils/validateEmail';
import formField from './formField';


// const FIELD = [
//     { label:"Survey Title", name:"title", errorMessage: 'You need a title!'},
//     { label:"Subject line", name:"subject", errorMessage: 'You need a subject!'},
//     { label:"Email Body", name:"body", errorMessage: 'Please provide email body!'},
//     { label:"Recipient list", name:"emails"}
// ];

class SurveyForm extends Component {
    renderFields() {
        return _.map(formField, ({ label, name }) => {
            return (
            <Field component={SurveyField} type="text" label={label} name={name} />
            )
        });

        // return (
        //     <div>
        //         <Field label="Survey Title" type="text" name="title" component={SurveyField} />
        //         <Field label="Subject line" type="text" name="subject" component={SurveyField} />
        //         <Field label="Email Body" type="text" name="body" component={SurveyField} />
        //         <Field label="Recipient list" type="text" name="emails" component={SurveyField} />

        //     </div>
        // );
    }

    render() {
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                {this.renderFields()}
                <Link to="/surveys" className="red btn-flat white-text">
                    Cancel
                    <i className="material-icons right">cancel</i>
                </Link>
                <button type="submit" className="teal btn-flat right white-text">
                    Next
                    <i className="material-icons right">done</i>
                </button>
                </form>
            </div>
        );
    };
};

function validate(values) {
    const errors = {};

    // if(!values.title){
    //     errors.title = 'You need a title! '
    // }
    // if(!values.subject){
    //     errors.subject = 'You need a subject! '
    // }
    // if(!values.body){
    //     errors.body = 'Pleasa provide email body! '
    // }

    _.each(formField, ({name, errorMessage}) => {
        if(!values[name]){
            errors[name]= errorMessage
        };
    });

    errors.recipients = validEmail(values.recipients || '');
    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'surveyForm',
    //keep form
    destroyOnUnmount: false
})(SurveyForm);