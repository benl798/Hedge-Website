import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import './myStyles.css';

class Quotes extends Form {
    state = {
        data: { name: "", address: "", mobile: "", email: "", message: "" },
        errors: {}
    };

    schema = {
        name: Joi.string()
            .required()
            .min(3)
            .regex(/^\s*\w+(?:[^\w,]+\w+)*[^,\w]*$/)
            .label("Your Name"),
        address: Joi.string()
            .required()
            .label("Home Address"),
        mobile: Joi.number()
            .required()
            .min(10)
            .label("Mobile Phone"),
        email: Joi.string()
            .required()
            .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
            .label("Email Address"),
        message: Joi.string()
            .required()
            .label("Message")
    }; // Schema

    doSubmit = () => {
        console.log("Submitted!");
    };

    render() {
        return (
            <div>
                <h1>Headline</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("name", "Your Name*")}
                    {this.renderInput("address", "Home Address*")}
                    {this.renderInput("mobile", "Mobile Phone*")}
                    {this.renderInput("email", "Email Address*")}
                    {this.renderInput("message", "Message")}
                    {this.renderButton("Get A Quote")}
                </form>
            </div>
        );
    };
};

export default Quotes;
