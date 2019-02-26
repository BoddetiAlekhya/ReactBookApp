import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {Form,Button} from 'semantic-ui-react'
import InlineError from '../messages/InlineError'



class ResetPasswordForm extends Component {
    state = {
        data: {
           token: this.props.token,
           password: '',
           passwordConfirmation: ''
        },
        loading: false,
        errors: {}
        }

        onChange = e => this.setState({...this.state,data: {...this.state.data,[e.target.name]: e.target.value}});

        onSubmit = (e) => {
            e.preventDefault();
            const errors = this.validate(this.state.data);
            this.setState({errors});
            if(Object.keys(errors).length === 0) {
                this.setState({loading: true});
                this.props
                .submit(this.state.data)
                .catch(err => this.setState({errors: err.response.data.errors,loading: false}));
            }
        };

        validate = data => {
            const errors = {};
            if(!(data.password))errors.password = "cant be blank";
            if(data.password !== data.passwordConfirmation)errors.password = "passwords must match";
            return errors;
        }
    
    render() {
        const {data,errors,loading} = this.state;

        return(
            <Form onSubmit ={this.onSubmit} loading = {loading} >
                
                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">password</label>
                    <input 
                    type="password" 
                    id="password" 
                    name="password" placeholder="Enter new Password" 
                    value={data.password} 
                    onChange={this.onChange} />

                    {errors.password && <InlineError text={errors.password} />}
                </Form.Field>

                <Form.Field error={!!errors.passwordConfirmation}>
                    <label htmlFor="passwordConfirmation">Confirm your Password</label>
                    <input 
                    type="password" 
                    id="passwordConfirmation" 
                    name="passwordConfirmation" placeholder="Re-Enter new Password" 
                    value={data.passwordConfirmation} 
                    onChange={this.onChange} />

                    {errors.passwordConfirmation && <InlineError text={errors.passwordConfirmation} />}
                </Form.Field>

                <Button primary>ResetPasswordForm
                </Button> 
            </Form >
        )
    }
}

ResetPasswordForm.propTypes = {
    submit: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired
}

export default ResetPasswordForm