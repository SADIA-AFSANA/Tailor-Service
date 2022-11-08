import React from 'react';
import useTitle from '../../hooks/useTitle';
import './Blog.css'

const Blog = () => {

    useTitle('Blog')

    return (
        <div className='blog  my-14 bg-pink-100 py-9'>
            <div className='my-5 '>
                <h2 className='text-error text-2xl font-semibold'>Ques : Difference between SQL and NoSQL.</h2>
                <p className='text-lime-600'>Ans: SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>
            <div>
                <h2 className='text-error text-2xl font-semibold'>Ques : What is JWT, and how does it work?</h2>
                <p className='text-lime-600'>Ans: JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)</p>
            </div>
            <div className='my-5 text-info'>
                <h2 className='text-error text-2xl font-semibold'>Ques : What is the difference between javascript and NodeJS?</h2>
                <p className='text-lime-600'>Ans: JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </div>
            <div>
                <h2 className='text-error text-2xl font-semibold'>Ques : How does NodeJS handle multiple requests at the same time?</h2>
                <p className='text-lime-600'>Ans:  NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
        </div>
    );
};

export default Blog;