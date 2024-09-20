(function() {var type_impls = {
"spin":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Mutex%3CT,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/mutex.rs.html#255-259\">source</a><a href=\"#impl-Debug-for-Mutex%3CT,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"spin/mutex/struct.Mutex.html\" title=\"struct spin::mutex::Mutex\">Mutex</a>&lt;T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spin/mutex.rs.html#256-258\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","spin::Mutex"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Mutex%3CT,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/mutex.rs.html#261-265\">source</a><a href=\"#impl-Default-for-Mutex%3CT,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"spin/mutex/struct.Mutex.html\" title=\"struct spin::mutex::Mutex\">Mutex</a>&lt;T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spin/mutex.rs.html#262-264\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","spin::Mutex"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CT%3E-for-Mutex%3CT,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/mutex.rs.html#267-271\">source</a><a href=\"#impl-From%3CT%3E-for-Mutex%3CT,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"spin/mutex/struct.Mutex.html\" title=\"struct spin::mutex::Mutex\">Mutex</a>&lt;T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spin/mutex.rs.html#268-270\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(data: T) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<T>","spin::Mutex"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Mutex%3CT,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/mutex.rs.html#131-166\">source</a><a href=\"#impl-Mutex%3CT,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, R&gt; <a class=\"struct\" href=\"spin/mutex/struct.Mutex.html\" title=\"struct spin::mutex::Mutex\">Mutex</a>&lt;T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/mutex.rs.html#148-152\">source</a><h4 class=\"code-header\">pub const fn <a href=\"spin/mutex/struct.Mutex.html#tymethod.new\" class=\"fn\">new</a>(value: T) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a new <a href=\"spin/mutex/struct.Mutex.html\" title=\"struct spin::mutex::Mutex\"><code>Mutex</code></a> wrapping the supplied data.</p>\n<h5 id=\"example\"><a class=\"doc-anchor\" href=\"#example\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>spin::Mutex;\n\n<span class=\"kw\">static </span>MUTEX: Mutex&lt;()&gt; = Mutex::new(());\n\n<span class=\"kw\">fn </span>demo() {\n    <span class=\"kw\">let </span>lock = MUTEX.lock();\n    <span class=\"comment\">// do something with lock\n    </span>drop(lock);\n}</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_inner\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/mutex.rs.html#163-165\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/mutex/struct.Mutex.html#tymethod.into_inner\" class=\"fn\">into_inner</a>(self) -&gt; T</h4></section></summary><div class=\"docblock\"><p>Consumes this <a href=\"spin/mutex/struct.Mutex.html\" title=\"struct spin::mutex::Mutex\"><code>Mutex</code></a> and unwraps the underlying data.</p>\n<h5 id=\"example-1\"><a class=\"doc-anchor\" href=\"#example-1\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>lock = spin::Mutex::new(<span class=\"number\">42</span>);\n<span class=\"macro\">assert_eq!</span>(<span class=\"number\">42</span>, lock.into_inner());</code></pre></div>\n</div></details></div></details>",0,"spin::Mutex"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Mutex%3CT,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/mutex.rs.html#168-189\">source</a><a href=\"#impl-Mutex%3CT,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, R: <a class=\"trait\" href=\"spin/relax/trait.RelaxStrategy.html\" title=\"trait spin::relax::RelaxStrategy\">RelaxStrategy</a>&gt; <a class=\"struct\" href=\"spin/mutex/struct.Mutex.html\" title=\"struct spin::mutex::Mutex\">Mutex</a>&lt;T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.lock\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/mutex.rs.html#184-188\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/mutex/struct.Mutex.html#tymethod.lock\" class=\"fn\">lock</a>(&amp;self) -&gt; <a class=\"struct\" href=\"spin/mutex/struct.MutexGuard.html\" title=\"struct spin::mutex::MutexGuard\">MutexGuard</a>&lt;'_, T&gt;</h4></section></summary><div class=\"docblock\"><p>Locks the <a href=\"spin/mutex/struct.Mutex.html\" title=\"struct spin::mutex::Mutex\"><code>Mutex</code></a> and returns a guard that permits access to the inner data.</p>\n<p>The returned value may be dereferenced for data access\nand the lock will be dropped when the guard falls out of scope.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>lock = spin::Mutex::new(<span class=\"number\">0</span>);\n{\n    <span class=\"kw\">let </span><span class=\"kw-2\">mut </span>data = lock.lock();\n    <span class=\"comment\">// The lock is now locked and the data can be accessed\n    </span><span class=\"kw-2\">*</span>data += <span class=\"number\">1</span>;\n    <span class=\"comment\">// The lock is implicitly dropped at the end of the scope\n</span>}</code></pre></div>\n</div></details></div></details>",0,"spin::Mutex"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Mutex%3CT,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/mutex.rs.html#191-253\">source</a><a href=\"#impl-Mutex%3CT,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, R&gt; <a class=\"struct\" href=\"spin/mutex/struct.Mutex.html\" title=\"struct spin::mutex::Mutex\">Mutex</a>&lt;T, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_locked\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/mutex.rs.html#199-201\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/mutex/struct.Mutex.html#tymethod.is_locked\" class=\"fn\">is_locked</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/core/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if the lock is currently held.</p>\n<h5 id=\"safety\"><a class=\"doc-anchor\" href=\"#safety\">§</a>Safety</h5>\n<p>This function provides no synchronization guarantees and so its result should be considered ‘out of date’\nthe instant it is called. Do not use it for synchronization purposes. However, it may be useful as a heuristic.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.force_unlock\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/mutex.rs.html#211-213\">source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"spin/mutex/struct.Mutex.html#tymethod.force_unlock\" class=\"fn\">force_unlock</a>(&amp;self)</h4></section></summary><div class=\"docblock\"><p>Force unlock this <a href=\"spin/mutex/struct.Mutex.html\" title=\"struct spin::mutex::Mutex\"><code>Mutex</code></a>.</p>\n<h5 id=\"safety-1\"><a class=\"doc-anchor\" href=\"#safety-1\">§</a>Safety</h5>\n<p>This is <em>extremely</em> unsafe if the lock is not held by the current\nthread. However, this can be useful in some instances for exposing the\nlock to FFI that doesn’t know how to deal with RAII.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_lock\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/mutex.rs.html#230-234\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/mutex/struct.Mutex.html#tymethod.try_lock\" class=\"fn\">try_lock</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"spin/mutex/struct.MutexGuard.html\" title=\"struct spin::mutex::MutexGuard\">MutexGuard</a>&lt;'_, T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Try to lock this <a href=\"spin/mutex/struct.Mutex.html\" title=\"struct spin::mutex::Mutex\"><code>Mutex</code></a>, returning a lock guard if successful.</p>\n<h5 id=\"example\"><a class=\"doc-anchor\" href=\"#example\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>lock = spin::Mutex::new(<span class=\"number\">42</span>);\n\n<span class=\"kw\">let </span>maybe_guard = lock.try_lock();\n<span class=\"macro\">assert!</span>(maybe_guard.is_some());\n\n<span class=\"comment\">// `maybe_guard` is still held, so the second call fails\n</span><span class=\"kw\">let </span>maybe_guard2 = lock.try_lock();\n<span class=\"macro\">assert!</span>(maybe_guard2.is_none());</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_mut\" class=\"method\"><a class=\"src rightside\" href=\"src/spin/mutex.rs.html#250-252\">source</a><h4 class=\"code-header\">pub fn <a href=\"spin/mutex/struct.Mutex.html#tymethod.get_mut\" class=\"fn\">get_mut</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/core/primitive.reference.html\">&amp;mut T</a></h4></section></summary><div class=\"docblock\"><p>Returns a mutable reference to the underlying data.</p>\n<p>Since this call borrows the <a href=\"spin/mutex/struct.Mutex.html\" title=\"struct spin::mutex::Mutex\"><code>Mutex</code></a> mutably, and a mutable reference is guaranteed to be exclusive in Rust,\nno actual locking needs to take place – the mutable borrow statically guarantees no locks exist. As such,\nthis is a ‘zero-cost’ operation.</p>\n<h5 id=\"example-1\"><a class=\"doc-anchor\" href=\"#example-1\">§</a>Example</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>lock = spin::Mutex::new(<span class=\"number\">0</span>);\n<span class=\"kw-2\">*</span>lock.get_mut() = <span class=\"number\">10</span>;\n<span class=\"macro\">assert_eq!</span>(<span class=\"kw-2\">*</span>lock.lock(), <span class=\"number\">10</span>);</code></pre></div>\n</div></details></div></details>",0,"spin::Mutex"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RawMutex-for-Mutex%3C(),+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/mutex.rs.html#318-340\">source</a><a href=\"#impl-RawMutex-for-Mutex%3C(),+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;R: <a class=\"trait\" href=\"spin/relax/trait.RelaxStrategy.html\" title=\"trait spin::relax::RelaxStrategy\">RelaxStrategy</a>&gt; <a class=\"trait\" href=\"lock_api/mutex/trait.RawMutex.html\" title=\"trait lock_api::mutex::RawMutex\">RawMutex</a> for <a class=\"struct\" href=\"spin/mutex/struct.Mutex.html\" title=\"struct spin::mutex::Mutex\">Mutex</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/core/primitive.unit.html\">()</a>, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.GuardMarker\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.GuardMarker\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"lock_api/mutex/trait.RawMutex.html#associatedtype.GuardMarker\" class=\"associatedtype\">GuardMarker</a> = <a class=\"struct\" href=\"lock_api/struct.GuardSend.html\" title=\"struct lock_api::GuardSend\">GuardSend</a></h4></section></summary><div class='docblock'>Marker type which determines whether a lock guard should be <code>Send</code>. Use\none of the <code>GuardSend</code> or <code>GuardNoSend</code> helper types here.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.INIT\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/spin/mutex.rs.html#321\">source</a><a href=\"#associatedconstant.INIT\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"lock_api/mutex/trait.RawMutex.html#associatedconstant.INIT\" class=\"constant\">INIT</a>: Self = _</h4></section></summary><div class='docblock'>Initial value for an unlocked mutex.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.lock\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spin/mutex.rs.html#323-326\">source</a><a href=\"#method.lock\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"lock_api/mutex/trait.RawMutex.html#tymethod.lock\" class=\"fn\">lock</a>(&amp;self)</h4></section></summary><div class='docblock'>Acquires this mutex, blocking the current thread until it is able to do so.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_lock\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spin/mutex.rs.html#328-331\">source</a><a href=\"#method.try_lock\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"lock_api/mutex/trait.RawMutex.html#tymethod.try_lock\" class=\"fn\">try_lock</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/core/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Attempts to acquire this mutex without blocking. Returns <code>true</code>\nif the lock was successfully acquired and <code>false</code> otherwise.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unlock\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spin/mutex.rs.html#333-335\">source</a><a href=\"#method.unlock\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"lock_api/mutex/trait.RawMutex.html#tymethod.unlock\" class=\"fn\">unlock</a>(&amp;self)</h4></section></summary><div class='docblock'>Unlocks this mutex. <a href=\"lock_api/mutex/trait.RawMutex.html#tymethod.unlock\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_locked\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spin/mutex.rs.html#337-339\">source</a><a href=\"#method.is_locked\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"lock_api/mutex/trait.RawMutex.html#method.is_locked\" class=\"fn\">is_locked</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/core/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Checks whether the mutex is currently locked.</div></details></div></details>","RawMutex","spin::Mutex"],["<section id=\"impl-Send-for-Mutex%3CT,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/mutex.rs.html#118\">source</a><a href=\"#impl-Send-for-Mutex%3CT,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"spin/mutex/struct.Mutex.html\" title=\"struct spin::mutex::Mutex\">Mutex</a>&lt;T, R&gt;</h3></section>","Send","spin::Mutex"],["<section id=\"impl-Sync-for-Mutex%3CT,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin/mutex.rs.html#117\">source</a><a href=\"#impl-Sync-for-Mutex%3CT,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"spin/mutex/struct.Mutex.html\" title=\"struct spin::mutex::Mutex\">Mutex</a>&lt;T, R&gt;</h3></section>","Sync","spin::Mutex"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()