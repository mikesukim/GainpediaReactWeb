import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const ALLBOOKS = gql`
    {
        books {
            title
            author
        }
      }
    `;

function Books(props) {
        const { loading, error, data } = useQuery(ALLBOOKS);
      
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
      
        return data.books.map(({ title, author }) => (
            <div key={title}>
              <p>
                {title}: {author}
              </p>
              {/* {props.name} */}
            </div>
          ));
}

export default Books;