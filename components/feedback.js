import * as React from 'react';
import { View, Text ,StyleSheet,TextInput,Button,ScrollView} from 'react-native';
import Header from "../shared/header";

// import {gql} from "apollo-boost";

// const FEEDBACK = gql`
//  mutation feedback(
//      $name:String!,
//      $email:String!,
//      $message:String!
//  ){
//      insert_feedback(
//          objects:{
//              name:$name,
//              email:$email,
//              message:$message
//          }
//      )
//      {
//          affected_rows
//      }
//  }
// `
const Feedback = ()=>{

    const [name,setName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [msg,setMsg] = React.useState('');
    async function handleSubmit(){
    //     variables={
    //         name,
    //         email,
    //         message:msg
    //     }
    //     await feedback({variables});
        console.log({name,email,msg});
        
    }

return (
        <ScrollView>
        <View style={styles.container}>
            <Header title="Feedback" />
            <View style={styles.desc}>
            <View >
                <Text>Contact Description</Text>
            </View>
            <View>
                <Text>contact@superskool.com</Text>
            </View>
            <View>
                <Text>Contact : +91-9812309123 - +91-9812309124</Text>
            </View>
            <View>
                <Text>Your Name</Text>
                <TextInput 
                style={styles.input}
                onChangeText={text=>setName(text)}
                 />
                <Text>Your Email</Text>
                <TextInput style={styles.input}
                onChangeText={text=>setEmail(text)}
                 />
                <Text>Message</Text>
                <TextInput
                multiline={true}
                onChangeText={text=>setMsg(text)} 
                style={{
                    height:80,
                    borderWidth:1,
                    borderColor:"black",
                    margin:10,
                    borderRadius:5
                }}
                numberOfLines={5}/>
                <View style={{alignItems:"center",paddingHorizontal:100}}>
                    <Button
                    title="Send"
                    onPress={handleSubmit}
                    />
                </View>
            </View>
            </View>
            <View style={styles.footer}>
            <View style={styles.footerItem}>
                <Text>SuperSkool</Text>
            </View>
            <View style={styles.footerItem}>
                <Text>Project</Text>
                <Text>Latest Release</Text>
                <Text>Updates</Text>
                <Text>License</Text>
                <Text>Old Version</Text>
            </View>
            <View style={styles.footerItem}>
                <Text>Support</Text>
                <Text>Troubleshooting</Text>
                <Text>Common Questions</Text>
                <Text>Report a Bug</Text>
                <Text>Get Help</Text>
            </View>
            <View style={styles.footerItem}>
                <Text>Company</Text>
                <Text>Priavcy Policy</Text>
                <Text>About Us</Text>
                <Text>Contact Us</Text>
                <Text>Term and Conditions</Text>
                <Text>Blog</Text>
                <Text>Status</Text>
            </View>
            <Text style={{borderBottomWidth:1}} />
            <View style={styles.footerItem}>
            <Text>@ 2020 SuperSkool</Text>
            </View>
        </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        fontFamily:"roboto"
    },
    text:{
      padding:15
    },
    input:{
        height:40,
        borderWidth:1,
        borderColor:"black",
        margin:10,
        borderRadius:5
    },
    desc:{
        padding:15
    },
    footer:{
        flex:1,
    },
    footerItem:{
        fontSize:12,
        padding:20,
        alignItems:"center",   
    }
  })

export default Feedback;