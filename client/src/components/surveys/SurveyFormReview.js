import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import formField from './formField';
import * as actions from '../../actions'; 
import { withRouter } from "react-router-dom";

const FormRevierw = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewField = _.map(formField, ({name, label}) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        )
    })
    
    return (
        <div>
            <h5>please confirm your survey</h5>

            {reviewField}
            <button 
                className="yellow white-text darken-3 btn-flat"
                onClick={onCancel}
            >
                Back
            </button>
            <button
                onClick={() => submitSurvey(formValues, history)} 
                className="green right white-text btn-flat"
            >
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    )
};

function mapStateToProps(state){

    return{
        formValues: state.form.surveyForm.values
    };
}


export default connect(mapStateToProps, actions)(withRouter(FormRevierw));
