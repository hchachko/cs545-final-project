import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes, useLocation} from 'react-router-dom';
import {useMutation, useQuery} from '@apollo/client';
import queries from '../queries';

function submit(){
    return (<div><p>test</p></div>);
}

function NewPost () {
    const [uploadImage] = useMutation(queries.UPLOAD_IMAGE);
    let body = null;
    let url, description, posterName;
    body = (
        <form
            className='form'
            id='new-post'
            onSubmit={(e) => {
                e.preventDefault();
                uploadImage({
                    variables: {
                        url: url.value,
                        description: description.value,
                        posterName: posterName.value,
                    }
                });
                url.value = '';
                description.value = '';
                posterName.value = '';
                alert('Post Added');
            }}
        >
            <div className='form-group'>
                <label>
                    URL:
                    <br />
                    <input
                    ref={(node) => {
                        url = node;
                    }}
                    required
                    autoFocus={true}
                    />
                </label>
            </div>
            <div className='form-group'>
                <label>
                    Description:
                    <br />
                    <input
                    ref={(node) => {
                        description = node;
                    }}
                    />
                </label>
            </div>
            <div className='form-group'>
                <label>
                    Poster Name:
                    <br />
                    <input
                    ref={(node) => {
                        posterName = node;
                    }}
                    />
                </label>
            </div>
            <button className='button' type='submit'>Add Post</button>
        </form>
    );
    return(
        
        <div>
            {body}
        </div>
    );
};

export default NewPost;