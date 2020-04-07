import React, { useRef } from 'react';

import { Image } from 'react-native';
import logo from '~/assets/logo.png';

import Background from '~/components/Background';

import {
    Container,
    Form,
    FormInput,
    SubmitButton,
    SignLink,
    SignLinkText,
} from './styles';

export default function SignUp({ navigation }) {
    const emailRef = useRef();
    const passwordRef = useRef();

    function handleSubmit() {}

    return (
        <Background>
            <Container>
                <Image source={logo} />

                {/*  <Input
                style={{ marginTop: 30 }}
                icon="call"
                placeholder="digite seu nome"
            /> */}

                <Form>
                    <FormInput
                        icon="person-outline"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="digite seu nome completo"
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            emailRef.current.focus();
                        }}
                    />

                    <FormInput
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="digite seu email"
                        ref={emailRef}
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            passwordRef.current.focus();
                        }}
                    />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        keyboardType="email-address"
                        placeholder="sua senha secreta"
                        ref={passwordRef}
                        returnKeyType="send"
                        onSubmitEditing={handleSubmit}
                    />

                    <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
                </Form>

                <SignLink
                    onPress={() => {
                        navigation.navigate('signIn');
                    }}
                >
                    <SignLinkText>já tenho conta</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
}
