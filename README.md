# Installation

```sh
sudo apt-get install cmake g++ pkg-config git vim-common libwebsockets-dev libjson-c-dev libssl-dev
mkdird build && cd build
cmake ..
make
```

---

# How to Use

To start the `termynal_tty` server use the following command under Linux:
```sh
./build/termynal_tty -p <port> <shell>
```