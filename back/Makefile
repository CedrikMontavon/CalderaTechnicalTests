CC=gcc
CXX=g++
LD=g++

CFLAGS=-Wall -Wextra
LDFLAGS=

all: ex1 ex2

ex1: ex1main.cpp.o cp.cpp.o
	$(LD) -o $@ $^ $(LDFLAGS)

ex2: ex2main.c cp.c.o
	$(LD) -o $@ $^ $(LDFLAGS)

%.c.o: %.c
	$(CC) -c -o $@ $^ $(CFLAGS)

%.cpp.o: %.cpp
	$(CXX) -c -o $@ $^ $(CFLAGS)

.PHONY: clean

clean:
	rm -f *.o ex1 ex2
