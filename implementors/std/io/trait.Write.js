(function() {var implementors = {};
implementors["bitcrypto"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"primitives/bytes/struct.Bytes.html\" title=\"struct primitives::bytes::Bytes\">Bytes</a>",];
implementors["chain"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"chain/bytes/struct.Bytes.html\" title=\"struct chain::bytes::Bytes\">Bytes</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"serialization/stream/struct.Stream.html\" title=\"struct serialization::stream::Stream\">Stream</a>",];
implementors["db"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"serialization/stream/struct.Stream.html\" title=\"struct serialization::stream::Stream\">Stream</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"db/bytes/struct.Bytes.html\" title=\"struct db::bytes::Bytes\">Bytes</a>","impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for SmallVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Array&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;,&nbsp;</span>",];
implementors["import"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"import/bytes/struct.Bytes.html\" title=\"struct import::bytes::Bytes\">Bytes</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"serialization/stream/struct.Stream.html\" title=\"struct serialization::stream::Stream\">Stream</a>",];
implementors["keys"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"keys/bytes/struct.Bytes.html\" title=\"struct keys::bytes::Bytes\">Bytes</a>","impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"https://docs.rs/arrayvec/0.3/arrayvec/struct.ArrayVec.html\" title=\"struct arrayvec::ArrayVec\">ArrayVec</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://docs.rs/arrayvec/0.3/arrayvec/array/trait.Array.html\" title=\"trait arrayvec::array::Array\">Array</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;,&nbsp;</span>",];
implementors["message"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"serialization/stream/struct.Stream.html\" title=\"struct serialization::stream::Stream\">Stream</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"message/bytes/struct.Bytes.html\" title=\"struct message::bytes::Bytes\">Bytes</a>",];
implementors["network"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"serialization/stream/struct.Stream.html\" title=\"struct serialization::stream::Stream\">Stream</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"primitives/bytes/struct.Bytes.html\" title=\"struct primitives::bytes::Bytes\">Bytes</a>",];
implementors["p2p"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"serialization/stream/struct.Stream.html\" title=\"struct serialization::stream::Stream\">Stream</a>","impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/split/struct.WriteHalf.html\" title=\"struct tokio_io::split::WriteHalf\">WriteHalf</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a>,&nbsp;</span>","impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/length_delimited/struct.FramedRead.html\" title=\"struct tokio_io::length_delimited::FramedRead\">FramedRead</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,&nbsp;</span>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"https://docs.rs/mio/0.6.1/mio/net/tcp/struct.TcpStream.html\" title=\"struct mio::net::tcp::TcpStream\">TcpStream</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for &amp;'a TcpStream","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for &amp;'a PipeWriter","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for &amp;'a Io","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for &amp;'a <a class=\"struct\" href=\"https://docs.rs/mio/0.6.1/mio/net/tcp/struct.TcpStream.html\" title=\"struct mio::net::tcp::TcpStream\">TcpStream</a>","impl&lt;B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"https://docs.rs/bytes/0.4/bytes/buf/writer/struct.Writer.html\" title=\"struct bytes::buf::writer::Writer\">Writer</a>&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/bytes/0.4/bytes/buf/buf_mut/trait.BufMut.html\" title=\"trait bytes::buf::buf_mut::BufMut\">BufMut</a>,&nbsp;</span>","impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for SmallVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Array&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;,&nbsp;</span>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"p2p/bytes/struct.Bytes.html\" title=\"struct p2p::bytes::Bytes\">Bytes</a>","impl&lt;'a, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for &amp;'a <a class=\"struct\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/reactor/poll_evented/struct.PollEvented.html\" title=\"struct tokio_core::reactor::poll_evented::PollEvented\">PollEvented</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'a E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,&nbsp;</span>","impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/reactor/poll_evented/struct.PollEvented.html\" title=\"struct tokio_core::reactor::poll_evented::PollEvented\">PollEvented</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,&nbsp;</span>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/net/tcp/struct.TcpStream.html\" title=\"struct tokio_core::net::tcp::TcpStream\">TcpStream</a>","impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/io/split/struct.WriteHalf.html\" title=\"struct tokio_core::io::split::WriteHalf\">WriteHalf</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,&nbsp;</span>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for &amp;'a <a class=\"struct\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/net/tcp/struct.TcpStream.html\" title=\"struct tokio_core::net::tcp::TcpStream\">TcpStream</a>",];
implementors["primitives"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"primitives/bytes/struct.Bytes.html\" title=\"struct primitives::bytes::Bytes\">Bytes</a>",];
implementors["rpc"] = ["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/split/struct.WriteHalf.html\" title=\"struct tokio_io::split::WriteHalf\">WriteHalf</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a>,&nbsp;</span>","impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/length_delimited/struct.FramedRead.html\" title=\"struct tokio_io::length_delimited::FramedRead\">FramedRead</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,&nbsp;</span>","impl&lt;'a, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for &amp;'a <a class=\"struct\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/reactor/poll_evented/struct.PollEvented.html\" title=\"struct tokio_core::reactor::poll_evented::PollEvented\">PollEvented</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&amp;'a E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,&nbsp;</span>","impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/reactor/poll_evented/struct.PollEvented.html\" title=\"struct tokio_core::reactor::poll_evented::PollEvented\">PollEvented</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,&nbsp;</span>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/net/tcp/struct.TcpStream.html\" title=\"struct tokio_core::net::tcp::TcpStream\">TcpStream</a>","impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/io/split/struct.WriteHalf.html\" title=\"struct tokio_core::io::split::WriteHalf\">WriteHalf</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,&nbsp;</span>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for &amp;'a <a class=\"struct\" href=\"https://docs.rs/tokio-core/0.1/tokio_core/net/tcp/struct.TcpStream.html\" title=\"struct tokio_core::net::tcp::TcpStream\">TcpStream</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"serialization/stream/struct.Stream.html\" title=\"struct serialization::stream::Stream\">Stream</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"primitives/bytes/struct.Bytes.html\" title=\"struct primitives::bytes::Bytes\">Bytes</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"https://docs.rs/mio/0.6.1/mio/net/tcp/struct.TcpStream.html\" title=\"struct mio::net::tcp::TcpStream\">TcpStream</a>","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for &amp;'a TcpStream","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for &amp;'a PipeWriter","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for &amp;'a Io","impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for &amp;'a <a class=\"struct\" href=\"https://docs.rs/mio/0.6.1/mio/net/tcp/struct.TcpStream.html\" title=\"struct mio::net::tcp::TcpStream\">TcpStream</a>","impl&lt;B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"https://docs.rs/bytes/0.4/bytes/buf/writer/struct.Writer.html\" title=\"struct bytes::buf::writer::Writer\">Writer</a>&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://docs.rs/bytes/0.4/bytes/buf/buf_mut/trait.BufMut.html\" title=\"trait bytes::buf::buf_mut::BufMut\">BufMut</a>,&nbsp;</span>","impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"https://docs.rs/arrayvec/0.3/arrayvec/struct.ArrayVec.html\" title=\"struct arrayvec::ArrayVec\">ArrayVec</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://docs.rs/arrayvec/0.3/arrayvec/array/trait.Array.html\" title=\"trait arrayvec::array::Array\">Array</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;,&nbsp;</span>","impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"enum\" href=\"https://docs.rs/either/1/either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,&nbsp;</span>","impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for SmallVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Array&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;,&nbsp;</span>",];
implementors["script"] = ["impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"https://docs.rs/arrayvec/0.3/arrayvec/struct.ArrayVec.html\" title=\"struct arrayvec::ArrayVec\">ArrayVec</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://docs.rs/arrayvec/0.3/arrayvec/array/trait.Array.html\" title=\"trait arrayvec::array::Array\">Array</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;,&nbsp;</span>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"script/bytes/struct.Bytes.html\" title=\"struct script::bytes::Bytes\">Bytes</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"serialization/stream/struct.Stream.html\" title=\"struct serialization::stream::Stream\">Stream</a>",];
implementors["serialization"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"serialization/bytes/struct.Bytes.html\" title=\"struct serialization::bytes::Bytes\">Bytes</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"serialization/struct.Stream.html\" title=\"struct serialization::Stream\">Stream</a>",];
implementors["verification"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"serialization/stream/struct.Stream.html\" title=\"struct serialization::stream::Stream\">Stream</a>","impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"https://docs.rs/arrayvec/0.3/arrayvec/struct.ArrayVec.html\" title=\"struct arrayvec::ArrayVec\">ArrayVec</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://docs.rs/arrayvec/0.3/arrayvec/array/trait.Array.html\" title=\"trait arrayvec::array::Array\">Array</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;,&nbsp;</span>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"struct\" href=\"primitives/bytes/struct.Bytes.html\" title=\"struct primitives::bytes::Bytes\">Bytes</a>","impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"enum\" href=\"https://docs.rs/either/1/either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,&nbsp;</span>","impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for SmallVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Array&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;,&nbsp;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
