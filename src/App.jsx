import './App.css'
import React from "react"
import { First } from './components/class01/First'
import { WithParams } from './components/class01/WithParams'
import { WithChildren } from './components/class01/WithChildren'
import { Card } from './components/layouts/Card'
import { Repetition } from './components/class01/Repetition'
import { Conditional } from './components/class01/Conditional'
import { Parent } from './components/comunications/direct/Parent'
import { SuperComp } from './components/comunications/indirect/SuperComp'
import { Input } from './components/input/Input'
import { Counter } from './components/counter/Counter'
import { Sena } from './components/sena/Sena'


export const App = (props) => 
    <div className="App">
        <Card titulo="Random numbers" color="#023E8A">
            <Sena nums={6}></Sena>
        </Card>
        <Card titulo="First component" color="#03045E">
            <First></First>
        </Card>
        <Card titulo="Component with parameter" color="#023E8A">
            <WithParams titulo="This is the title"
                subtitulo="This is the subtitle">/</WithParams>
            <WithParams titulo="I can change this"
                subtitulo="And this">/</WithParams>
        </Card>
        <Card titulo="Component with children" color="#03045E">
            <WithChildren>
                <ul>
                    <li>Ana</li>
                    <li>João</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </WithChildren>
        </Card>
        <Card titulo="Repetition component" color="#023E8A">
            <Repetition></Repetition>
        </Card>
        <Card titulo="Conditional component" color="#03045E">
            <Conditional number={10}></Conditional>
        </Card>
        <Card titulo="First Communication Component" color="#023E8A">
            <Parent surname="Dantas"></Parent>
        </Card>
        <Card titulo="Indirect communication Component" color="#03045E">
            <SuperComp></SuperComp>
        </Card>
        <Card titulo="Input Component" color="#023E8A">
            <Input></Input>
        </Card>
        <Card titulo="Input Component" color="#023E8A">
            <Counter></Counter>
        </Card>



    </div>