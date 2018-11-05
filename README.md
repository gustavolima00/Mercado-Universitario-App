# Mercadao-Universitario-BackEnd

## Descrição
Aplicativo de vendas direcionado para vendas de alimentos em universidades.

## Requisitos

### Node e react native
* [Site Oficial](https://nodejs.org/en/download/)
    #### nodejs
        sudo apt install nodejs npm
    #### npm
        sudo apt install npm
    #### react-native-cli
        sudo npm install -g react-native-cli
### Java 8
*
    #### Adicione um PPA de terceiros para o Ubuntu
        sudo add-apt-repository ppa:webupd8team/java
    #### Baixe Oracle Java 8 Installer
        sudo apt update
        sudo apt install oracle-java8-installer
    #### Configure o Oracle JDK8 como padrão
        sudo apt install oracle-java8-set-default

### Android Studio
* [Site Oficial](https://developer.android.com/studio/index.html)
* Na instalação marque as opçoes
    * Android Virtual Device
    * Android SDK Platform 27
    * Android SDK Build-Tools 27.0.3
### Outros requisitos
Caso os requisitos acima não tenham funcionado acesse o site oficial do [react-native](https://facebook.github.io/react-native/docs/getting-started) e siga as instrunçoes de instalação da aba 'Building Projects with Native Code'
## Como rodar
* Configure variaveis de ambiente
    #### SKD
        export ANDROID_HOME=$HOME/Android/Sdk
        export PATH=$PATH:$ANDROID_HOME/emulator
        export PATH=$PATH:$ANDROID_HOME/tools
        export PATH=$PATH:$ANDROID_HOME/tools/bin
        export PATH=$PATH:$ANDROID_HOME/platform-tools
* Use o Makefile
    #### Comandos
        make
