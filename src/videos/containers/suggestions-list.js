import React, { Component } from 'react'
import {
    FlatList,
    Text
} from 'react-native'
import Layout from '../components/suggestions-list-layout'
import Empty from '../components/empty'
import VerticalSeparator from '../components/vertical-separator'

class SuggestionList extends Component {

    renderEmpty = () => <Empty text='No hay sugerencias :(' />

    ItemSeparator = () => <VerticalSeparator />

    render() {
        const list = [
            {
                title: 'leo',
                key: '1'
            },
            {
                title: 'nidas',
                key: '2'
            },
        ]

        return (
            <Layout
                title='Recomendado para ti'
            >
                <FlatList
                    data={list}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.ItemSeparator}
                    renderItem={({ item }) => <Text>{item.title}</Text>}
                />
            </Layout>

        )
    }
}

export default SuggestionList