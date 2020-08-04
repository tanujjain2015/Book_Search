import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
        user {
            _id
        }
        }
    }
`;

export const ADD_USER = gql`
    mutation createUser($username: String!, $password: String!, $email: String!) {
        createUser(username: $username, password: $password, email: $email) {
        token
        user {
            _id
            username
            email
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook(
        $input: bookDetails
    ) {
        saveBook(
        input: $input
        ) {
        _id
        username
        email
        bookCount
        savedBooks {
            _id
            description
            authors
            image
            bookId
            link
            title
        }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String) {
        removeBook(
        bookId: $bookId
        ) {
        _id
        username
        email
        bookCount
        savedBooks {
            _id
            description
            authors
            image
            bookId
            link
            title
        }
        }
    }
`;

