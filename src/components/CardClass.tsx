import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { ClassData } from '../interface/classInterfaces'
import { styles } from '../theme/appTheme'
import { FadeInImage } from './FadeInImage'


const windowwidth = Dimensions.get('window').width

interface Props {
    clases: ClassData
}

export const CardClass = ({ clases }: Props) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={
                () => navigation.navigate('ClassScreen', { ClassData: clases })}
        >

            <View style={{
                ...styles.CardContainer,
                width: windowwidth * 0.4
            }}>

                <View>
                    <Text style={styles.name}>
                        {clases.name}
                    </Text>
                </View>
                    <FadeInImage
                        uri={clases.image}
                        style={styles.classImage}
                    />
            </View>
        </TouchableOpacity>
    )
}

