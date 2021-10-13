#include <iostream>
#include <sstream>

#include "cp.hpp"

int main(int argc, char *argv[])
{
	if (argc < 3)
	{
		std::cout << "No arguments provided" << std::endl << "Usage : ./ex1 <path_to_source_file> <path_to_dest_file>" << std::endl;

		return EXIT_FAILURE;
	}

	// Copying file from source to dest
	cp_cpp(argv[1], argv[2]);

	// Comparing the two files
	std::stringstream diff1;

	diff1 << "diff " << argv[1] << ' ' << argv[2];

	if (std::system(diff1.str().c_str()) == 0)
	{
		std::cout << "Success !" << std::endl;
	}
	else
	{
		std::cout << "Copy error !" << std::endl;
	}

	return EXIT_SUCCESS;
}
