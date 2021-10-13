#if !defined(CP_H)
#define CP_H

#if defined(__cplusplus)
extern "C" {
#endif

#define BUFFER_COPY 1024

bool cp_c(const char *src, const char *dst);

#if defined(__cplusplus)
}
#endif

#endif /* CP_H */