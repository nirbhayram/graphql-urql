import React from 'react'
import { useQuery } from 'urql'
import gql from 'graphql-tag'
import Link from './Link'

const Search = () => {
    const [filter, setFilter] = React.useState('')

    const search = React.useCallback(() => { }, []);
    const links = []

    return (
        <div>
            <div>
                Search
                <input
                    type='text'
                    onChange={e => setFilter(e.target.value)}
                />
                <button onClick={search}>search</button>
            </div>
            {links.map((link, index) => (
                <Link key={link.id} link={link} index={index} />
            ))}
        </div>
    )
}

export default Search