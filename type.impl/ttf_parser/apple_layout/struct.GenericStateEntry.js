(function() {var type_impls = {
"ttf_parser":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-GenericStateEntry%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ttf_parser/aat.rs.html#32\">source</a><a href=\"#impl-Clone-for-GenericStateEntry%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"ttf_parser/trait.FromData.html\" title=\"trait ttf_parser::FromData\">FromData</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"ttf_parser/apple_layout/struct.GenericStateEntry.html\" title=\"struct ttf_parser::apple_layout::GenericStateEntry\">GenericStateEntry</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ttf_parser/aat.rs.html#32\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"ttf_parser/apple_layout/struct.GenericStateEntry.html\" title=\"struct ttf_parser::apple_layout::GenericStateEntry\">GenericStateEntry</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.81.0/src/core/clone.rs.html#172\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","ttf_parser::aat::StateEntry"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-GenericStateEntry%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ttf_parser/aat.rs.html#32\">source</a><a href=\"#impl-Debug-for-GenericStateEntry%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"ttf_parser/trait.FromData.html\" title=\"trait ttf_parser::FromData\">FromData</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"ttf_parser/apple_layout/struct.GenericStateEntry.html\" title=\"struct ttf_parser::apple_layout::GenericStateEntry\">GenericStateEntry</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ttf_parser/aat.rs.html#32\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","ttf_parser::aat::StateEntry"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FromData-for-GenericStateEntry%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ttf_parser/aat.rs.html#44-56\">source</a><a href=\"#impl-FromData-for-GenericStateEntry%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"ttf_parser/trait.FromData.html\" title=\"trait ttf_parser::FromData\">FromData</a>&gt; <a class=\"trait\" href=\"ttf_parser/trait.FromData.html\" title=\"trait ttf_parser::FromData\">FromData</a> for <a class=\"struct\" href=\"ttf_parser/apple_layout/struct.GenericStateEntry.html\" title=\"struct ttf_parser::apple_layout::GenericStateEntry\">GenericStateEntry</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedconstant.SIZE\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/ttf_parser/aat.rs.html#45\">source</a><a href=\"#associatedconstant.SIZE\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"ttf_parser/trait.FromData.html#associatedconstant.SIZE\" class=\"constant\">SIZE</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.usize.html\">usize</a> = _</h4></section></summary><div class='docblock'>Object’s raw data size. <a href=\"ttf_parser/trait.FromData.html#associatedconstant.SIZE\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.parse\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/ttf_parser/aat.rs.html#48-55\">source</a><a href=\"#method.parse\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"ttf_parser/trait.FromData.html#tymethod.parse\" class=\"fn\">parse</a>(data: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Self&gt;</h4></section></summary><div class='docblock'>Parses an object from a raw data.</div></details></div></details>","FromData","ttf_parser::aat::StateEntry"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericStateEntry%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ttf_parser/aat.rs.html#58-100\">source</a><a href=\"#impl-GenericStateEntry%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"ttf_parser/trait.FromData.html\" title=\"trait ttf_parser::FromData\">FromData</a>&gt; <a class=\"struct\" href=\"ttf_parser/apple_layout/struct.GenericStateEntry.html\" title=\"struct ttf_parser::apple_layout::GenericStateEntry\">GenericStateEntry</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.has_offset\" class=\"method\"><a class=\"src rightside\" href=\"src/ttf_parser/aat.rs.html#61-63\">source</a><h4 class=\"code-header\">pub fn <a href=\"ttf_parser/apple_layout/struct.GenericStateEntry.html#tymethod.has_offset\" class=\"fn\">has_offset</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Checks that entry has an offset.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.value_offset\" class=\"method\"><a class=\"src rightside\" href=\"src/ttf_parser/aat.rs.html#69-71\">source</a><h4 class=\"code-header\">pub fn <a href=\"ttf_parser/apple_layout/struct.GenericStateEntry.html#tymethod.value_offset\" class=\"fn\">value_offset</a>(&amp;self) -&gt; <a class=\"struct\" href=\"ttf_parser/apple_layout/struct.ValueOffset.html\" title=\"struct ttf_parser::apple_layout::ValueOffset\">ValueOffset</a></h4></section></summary><div class=\"docblock\"><p>Returns a value offset.</p>\n<p>Used by kern::format1 subtable.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.has_reset\" class=\"method\"><a class=\"src rightside\" href=\"src/ttf_parser/aat.rs.html#75-77\">source</a><h4 class=\"code-header\">pub fn <a href=\"ttf_parser/apple_layout/struct.GenericStateEntry.html#tymethod.has_reset\" class=\"fn\">has_reset</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>If set, reset the kerning data (clear the stack).</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.has_advance\" class=\"method\"><a class=\"src rightside\" href=\"src/ttf_parser/aat.rs.html#81-83\">source</a><h4 class=\"code-header\">pub fn <a href=\"ttf_parser/apple_layout/struct.GenericStateEntry.html#tymethod.has_advance\" class=\"fn\">has_advance</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>If set, advance to the next glyph before going to the new state.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.has_push\" class=\"method\"><a class=\"src rightside\" href=\"src/ttf_parser/aat.rs.html#87-89\">source</a><h4 class=\"code-header\">pub fn <a href=\"ttf_parser/apple_layout/struct.GenericStateEntry.html#tymethod.has_push\" class=\"fn\">has_push</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>If set, push this glyph on the kerning stack.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.has_mark\" class=\"method\"><a class=\"src rightside\" href=\"src/ttf_parser/aat.rs.html#97-99\">source</a><h4 class=\"code-header\">pub fn <a href=\"ttf_parser/apple_layout/struct.GenericStateEntry.html#tymethod.has_mark\" class=\"fn\">has_mark</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>If set, remember this glyph as the marked glyph.</p>\n<p>Used by kerx::format4 subtable.</p>\n<p>Yes, the same as <a href=\"ttf_parser/apple_layout/struct.GenericStateEntry.html#method.has_push\" title=\"method ttf_parser::apple_layout::GenericStateEntry::has_push\"><code>has_push</code></a>.</p>\n</div></details></div></details>",0,"ttf_parser::aat::StateEntry"],["<section id=\"impl-Copy-for-GenericStateEntry%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/ttf_parser/aat.rs.html#32\">source</a><a href=\"#impl-Copy-for-GenericStateEntry%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"ttf_parser/trait.FromData.html\" title=\"trait ttf_parser::FromData\">FromData</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"ttf_parser/apple_layout/struct.GenericStateEntry.html\" title=\"struct ttf_parser::apple_layout::GenericStateEntry\">GenericStateEntry</a>&lt;T&gt;</h3></section>","Copy","ttf_parser::aat::StateEntry"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()