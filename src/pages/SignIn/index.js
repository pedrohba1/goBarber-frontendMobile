import React from 'react';

import Input from '~/components/Input';
import Background from '~/components/Background';
import Button from '~/components/Button';

export default function SignIn() {
    return (
        <Background>
            <Input
                style={{ marginTop: 30 }}
                icon="call"
                placeholder="digite seu nome"
            />

            <Button>Entrar</Button>
        </Background>
    );
}
