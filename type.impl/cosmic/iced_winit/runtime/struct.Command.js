(function() {var type_impls = {
"cosmic":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Command%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_runtime/command.rs.html#28\">source</a><a href=\"#impl-Command%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"struct\" href=\"cosmic/iced_winit/runtime/struct.Command.html\" title=\"struct cosmic::iced_winit::runtime::Command\">Command</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.none\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_runtime/command.rs.html#32\">source</a><h4 class=\"code-header\">pub const fn <a href=\"cosmic/iced_winit/runtime/struct.Command.html#tymethod.none\" class=\"fn\">none</a>() -&gt; <a class=\"struct\" href=\"cosmic/iced_winit/runtime/struct.Command.html\" title=\"struct cosmic::iced_winit::runtime::Command\">Command</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates an empty <a href=\"cosmic/iced_winit/runtime/struct.Command.html\" title=\"struct cosmic::iced_winit::runtime::Command\"><code>Command</code></a>.</p>\n<p>In other words, a <a href=\"cosmic/iced_winit/runtime/struct.Command.html\" title=\"struct cosmic::iced_winit::runtime::Command\"><code>Command</code></a> that does nothing.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.single\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_runtime/command.rs.html#37\">source</a><h4 class=\"code-header\">pub const fn <a href=\"cosmic/iced_winit/runtime/struct.Command.html#tymethod.single\" class=\"fn\">single</a>(action: <a class=\"enum\" href=\"cosmic/iced_winit/runtime/command/enum.Action.html\" title=\"enum cosmic::iced_winit::runtime::command::Action\">Action</a>&lt;T&gt;) -&gt; <a class=\"struct\" href=\"cosmic/iced_winit/runtime/struct.Command.html\" title=\"struct cosmic::iced_winit::runtime::Command\">Command</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a <a href=\"cosmic/iced_winit/runtime/struct.Command.html\" title=\"struct cosmic::iced_winit::runtime::Command\"><code>Command</code></a> that performs a single <a href=\"cosmic/iced_winit/runtime/command/enum.Action.html\" title=\"enum cosmic::iced_winit::runtime::command::Action\"><code>Action</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.widget\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_runtime/command.rs.html#42\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_winit/runtime/struct.Command.html#tymethod.widget\" class=\"fn\">widget</a>(operation: impl <a class=\"trait\" href=\"cosmic/iced_winit/graphics/core/widget/trait.Operation.html\" title=\"trait cosmic::iced_winit::graphics::core::widget::Operation\">Operation</a>&lt;T&gt; + 'static) -&gt; <a class=\"struct\" href=\"cosmic/iced_winit/runtime/struct.Command.html\" title=\"struct cosmic::iced_winit::runtime::Command\">Command</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a <a href=\"cosmic/iced_winit/runtime/struct.Command.html\" title=\"struct cosmic::iced_winit::runtime::Command\"><code>Command</code></a> that performs a <a href=\"cosmic/iced_winit/graphics/core/widget/trait.Operation.html\" title=\"trait cosmic::iced_winit::graphics::core::widget::Operation\"><code>widget::Operation</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.perform\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_runtime/command.rs.html#47-50\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_winit/runtime/struct.Command.html#tymethod.perform\" class=\"fn\">perform</a>&lt;A&gt;(\n    future: impl <a class=\"trait\" href=\"cosmic/iced_winit/graphics/futures/futures/trait.Future.html\" title=\"trait cosmic::iced_winit::graphics::futures::futures::Future\">Future</a>&lt;Output = A&gt; + <a class=\"trait\" href=\"cosmic/iced_winit/graphics/futures/trait.MaybeSend.html\" title=\"trait cosmic::iced_winit::graphics::futures::MaybeSend\">MaybeSend</a> + 'static,\n    f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(A) -&gt; T + <a class=\"trait\" href=\"cosmic/iced_winit/graphics/futures/trait.MaybeSend.html\" title=\"trait cosmic::iced_winit::graphics::futures::MaybeSend\">MaybeSend</a> + 'static,\n) -&gt; <a class=\"struct\" href=\"cosmic/iced_winit/runtime/struct.Command.html\" title=\"struct cosmic::iced_winit::runtime::Command\">Command</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a <a href=\"cosmic/iced_winit/runtime/struct.Command.html\" title=\"struct cosmic::iced_winit::runtime::Command\"><code>Command</code></a> that performs the action of the given future.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.run\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_runtime/command.rs.html#57-60\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_winit/runtime/struct.Command.html#tymethod.run\" class=\"fn\">run</a>&lt;A&gt;(\n    stream: impl <a class=\"trait\" href=\"cosmic/iced_winit/graphics/futures/futures/trait.Stream.html\" title=\"trait cosmic::iced_winit::graphics::futures::futures::Stream\">Stream</a>&lt;Item = A&gt; + <a class=\"trait\" href=\"cosmic/iced_winit/graphics/futures/trait.MaybeSend.html\" title=\"trait cosmic::iced_winit::graphics::futures::MaybeSend\">MaybeSend</a> + 'static,\n    f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(A) -&gt; T + <a class=\"trait\" href=\"cosmic/iced_winit/graphics/futures/trait.MaybeSend.html\" title=\"trait cosmic::iced_winit::graphics::futures::MaybeSend\">MaybeSend</a> + 'static,\n) -&gt; <a class=\"struct\" href=\"cosmic/iced_winit/runtime/struct.Command.html\" title=\"struct cosmic::iced_winit::runtime::Command\">Command</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a <a href=\"cosmic/iced_winit/runtime/struct.Command.html\" title=\"struct cosmic::iced_winit::runtime::Command\"><code>Command</code></a> that runs the given stream to completion.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.batch\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_runtime/command.rs.html#70\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_winit/runtime/struct.Command.html#tymethod.batch\" class=\"fn\">batch</a>(commands: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"struct\" href=\"cosmic/iced_winit/runtime/struct.Command.html\" title=\"struct cosmic::iced_winit::runtime::Command\">Command</a>&lt;T&gt;&gt;) -&gt; <a class=\"struct\" href=\"cosmic/iced_winit/runtime/struct.Command.html\" title=\"struct cosmic::iced_winit::runtime::Command\">Command</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a <a href=\"cosmic/iced_winit/runtime/struct.Command.html\" title=\"struct cosmic::iced_winit::runtime::Command\"><code>Command</code></a> that performs the actions of all the given\ncommands.</p>\n<p>Once this command is run, all the commands will be executed at once.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.map\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_runtime/command.rs.html#85-91\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_winit/runtime/struct.Command.html#tymethod.map\" class=\"fn\">map</a>&lt;A&gt;(\n    self,\n    f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(T) -&gt; A + <a class=\"trait\" href=\"cosmic/iced_winit/graphics/futures/trait.MaybeSend.html\" title=\"trait cosmic::iced_winit::graphics::futures::MaybeSend\">MaybeSend</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + 'static,\n) -&gt; <a class=\"struct\" href=\"cosmic/iced_winit/runtime/struct.Command.html\" title=\"struct cosmic::iced_winit::runtime::Command\">Command</a>&lt;A&gt;<div class=\"where\">where\n    T: 'static,\n    A: 'static,</div></h4></section></summary><div class=\"docblock\"><p>Applies a transformation to the result of a <a href=\"cosmic/iced_winit/runtime/struct.Command.html\" title=\"struct cosmic::iced_winit::runtime::Command\"><code>Command</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.actions\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_runtime/command.rs.html#106\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_winit/runtime/struct.Command.html#tymethod.actions\" class=\"fn\">actions</a>(self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"cosmic/iced_winit/runtime/command/enum.Action.html\" title=\"enum cosmic::iced_winit::runtime::command::Action\">Action</a>&lt;T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Returns all of the actions of the <a href=\"cosmic/iced_winit/runtime/struct.Command.html\" title=\"struct cosmic::iced_winit::runtime::Command\"><code>Command</code></a>.</p>\n</div></details></div></details>",0,"cosmic::app::command::Command"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Command%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_runtime/command.rs.html#117\">source</a><a href=\"#impl-Debug-for-Command%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"cosmic/iced_winit/runtime/struct.Command.html\" title=\"struct cosmic::iced_winit::runtime::Command\">Command</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_runtime/command.rs.html#118\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","cosmic::app::command::Command"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()