import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <Card key={dish.id}>
                <CardImg top width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    else {
        return (<div></div>);
    }
}

function RenderComments({ comments }) {
    if (comments != null) {
        let commentsList = (comments.map((comment) => {
            return (<ListGroup key={comment.id}>
                <ListGroupItem className="border-0">{comment['comment']}</ListGroupItem>
                <ListGroupItem className="border-0">--{comment['author']} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</ListGroupItem>
            </ListGroup>);
        }));

        return (
            <div>
                <h4>Comments</h4>
                {commentsList}
            </div>
        );

    }
    else {
        return (<div></div>);
    }

}

const DishDetail = (props) => {
    return (
        <div className="container">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        </div>


    );
}


export default DishDetail;