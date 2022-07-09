import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { BossData } from '../interface/bossInterface'
import { ClassData } from '../interface/classInterfaces'


interface Props {
    clases: ClassData,
    bosses: BossData

}

export const HomeScreen = ({ clases, bosses}: Props) => {

    const navigation = useNavigation()

    return (
        <>
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={
                    () => navigation.navigate('ClassListScreen', { ClassData: clases })}
            >
                <View style={styles.containerList}>
                    <Text>CLASES</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={
                    () => navigation.navigate('BossListScreen', { BossData: bosses })}
            >
                <View style={styles.containerList}>
                    <Text>BOSSES</Text>
                </View>
            </TouchableOpacity>
        </>

    )
}

const styles = StyleSheet.create({
    containerList: {
        width: 150,
        height: 100,
        backgroundColor: 'white'
    }
})
