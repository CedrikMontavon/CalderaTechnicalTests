#include <stdio.h>
#include "cp.h"

#define EXIT_FAILURE 1;
#define EXIT_SUCCESS 0;

int main(int argc, char *argv[])
{
	if (argc < 3)
	{
		printf("No arguments provided\nUsage : ./ex2 <path_to_file> <path_to_dest_file>\n");

		return EXIT_FAILURE;
	}

	// Copying the file from source to dest
	cp_c(argv[1], argv[2]);

	return EXIT_SUCCESS;
}
