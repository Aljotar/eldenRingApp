import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDebounced } from '../hooks/useDebounced'


interface Props {
    onDebounce: ( value: string ) => void;
}

export const SearchInfo = ( {onDebounce}: Props ) => {

    const [ textValue, setTextValue] = useState('')

    const debouncedValue =useDebounced( textValue, 3000 )


    useEffect(() => {
    
        onDebounce(debouncedValue)

    }, [debouncedValue])
    


    return (
        <View style={styles.container}>
            <View style={styles.textBackground}>
                <TextInput
                    placeholder='Search'
                    style={styles.textInput}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}
                />

                <Icon
                    name='search-outline'
                    color='grey'
                    size={30}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        top: 2
    }
})
