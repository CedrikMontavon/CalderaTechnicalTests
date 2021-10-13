#include <iostream>
#include <fstream>
#include <exception>
#include <fstream>
#include <tuple>

#include "cp.hpp"

bool cp_cpp(const std::string &src, const std::string &dst)
{
	std::ifstream srcStream;
	std::ofstream dstStream;

	try 
	{
		srcStream.open(src, std::ios_base::in | std::ios_base::binary);
		dstStream.open(dst, std::ios_base::out | std::ios_base::binary);

		dstStream << srcStream.rdbuf();

		srcStream.close();
		dstStream.close();
	}
	catch (const std::exception &e) 
	{
		std::cerr << e.what() << std::endl;

		return false;
	}

	return true;
}
