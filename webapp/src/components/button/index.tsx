import { h, Component, ComponentChildren } from 'preact';

import './button.scss'

interface Props {
    command: string;
    socket: WebSocket;
    textEncoder: TextEncoder;
}

export class Button extends Component<Props> {
    constructor(props) {
        super(props);
    }

    private execCommand(data: string, socket: WebSocket, encoder: TextEncoder) {
        console.log("[Debug] Execute command >> " + data);
        if (socket.readyState === WebSocket.OPEN) {
            socket.send(encoder.encode('0' + data));
        }
    }

    render({ command, socket, textEncoder } : Props) {
        return <a href="#" onClick={ () => this.execCommand(command, socket, textEncoder) } class="glitch">17</a>
    }
}