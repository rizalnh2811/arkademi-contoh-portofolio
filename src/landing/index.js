import React, {Component} from "react";
import "./landing.css";
import TopName from "./component/topName"
import Description from "./component/description";
import Form from "./component/form";
import ScrollDown from "./component/scrollDown";

class Landing extends Component{
    render(){
        return (
    <div class="wrapper with-image ">
        <div class="flex-wrapper">
            {/* topname */}
            <TopName
            name="Rizal NH"
            ></TopName>
            {/* -- */}
            {/* description */}
            <Description>
            </Description>
            {/* -- */}
            {/* form */}
            <Form></Form>
            {/* -- */}
            {/* scroll down */}
            <ScrollDown></ScrollDown>
            {/* -- */}
        </div>
        <div class="opacity">
        </div>
    </div>
        )
    }
}

export default Landing;