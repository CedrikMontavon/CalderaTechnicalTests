#include <stdio.h>
#include <stdbool.h>

#include "cp.h"

bool cp_c(const char *src, const char *dst)
{
	FILE *srcFile = fopen(src, "r");
	FILE *dstFile = fopen(dst, "w"); 

	if (srcFile == NULL || dstFile == NULL)
	{
		return false;
	}

	char buffer[BUFFER_COPY];
	size_t bytes;

	while (0 < (bytes = fread(buffer, 1, sizeof(buffer), srcFile)))
	{
		fwrite(buffer, 1, bytes, dstFile);
	}

	fclose(srcFile);
	fclose(dstFile);

	return true;
}
