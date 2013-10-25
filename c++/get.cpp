// Edit : rewritten for cURLpp 0.7.3
// Note : namespace changed, was cURLpp in 0.7.2 ...
#include <curlpp/cURLpp.hpp>
#include <curlpp/Easy.hpp>
#include <curlpp/Options.hpp>

// RAII cleanup
curlpp::Cleanup myCleanup;

// standard request object.
curlpp::Easy myRequest;

// Set the URL.
myRequest.setOpt(new curlpp::options::Url(std::string("http://www.wikipedia.com")));

// Send request and get a result.
// By default the result goes to standard output.
// Here I use a shortcut to get it in a string stream ...
std::ostringstream os;
os << myRequest.perform();

string asAskedInQuestion = os.str();
