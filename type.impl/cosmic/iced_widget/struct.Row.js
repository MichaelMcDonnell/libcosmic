(function() {var type_impls = {
"cosmic":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Row%3C'a,+Message,+Renderer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_widget/row.rs.html#104-106\">source</a><a href=\"#impl-Default-for-Row%3C'a,+Message,+Renderer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Message, Renderer&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"cosmic/iced_widget/struct.Row.html\" title=\"struct cosmic::iced_widget::Row\">Row</a>&lt;'a, Message, Renderer&gt;<div class=\"where\">where\n    Renderer: <a class=\"trait\" href=\"cosmic/iced_winit/graphics/core/trait.Renderer.html\" title=\"trait cosmic::iced_winit::graphics::core::Renderer\">Renderer</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/row.rs.html#108\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"cosmic/iced_widget/struct.Row.html\" title=\"struct cosmic::iced_widget::Row\">Row</a>&lt;'a, Message, Renderer&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","cosmic::widget::row::Row"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Row%3C'a,+Message,+Theme,+Renderer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_widget/row.rs.html#26-28\">source</a><a href=\"#impl-Row%3C'a,+Message,+Theme,+Renderer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Message, Theme, Renderer&gt; <a class=\"struct\" href=\"cosmic/iced_widget/struct.Row.html\" title=\"struct cosmic::iced_widget::Row\">Row</a>&lt;'a, Message, Theme, Renderer&gt;<div class=\"where\">where\n    Renderer: <a class=\"trait\" href=\"cosmic/iced_winit/graphics/core/trait.Renderer.html\" title=\"trait cosmic::iced_winit::graphics::core::Renderer\">Renderer</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_widget/row.rs.html#31\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_widget/struct.Row.html#tymethod.new\" class=\"fn\">new</a>() -&gt; <a class=\"struct\" href=\"cosmic/iced_widget/struct.Row.html\" title=\"struct cosmic::iced_widget::Row\">Row</a>&lt;'a, Message, Theme, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Creates an empty <a href=\"cosmic/iced_widget/struct.Row.html\" title=\"struct cosmic::iced_widget::Row\"><code>Row</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_children\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_widget/row.rs.html#43-45\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_widget/struct.Row.html#tymethod.with_children\" class=\"fn\">with_children</a>(\n    children: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Element.html\" title=\"struct cosmic::iced_winit::graphics::core::Element\">Element</a>&lt;'a, Message, Theme, Renderer&gt;&gt;,\n) -&gt; <a class=\"struct\" href=\"cosmic/iced_widget/struct.Row.html\" title=\"struct cosmic::iced_widget::Row\">Row</a>&lt;'a, Message, Theme, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a <a href=\"cosmic/iced_widget/struct.Row.html\" title=\"struct cosmic::iced_widget::Row\"><code>Row</code></a> with the given elements.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.spacing\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_widget/row.rs.html#54\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_widget/struct.Row.html#tymethod.spacing\" class=\"fn\">spacing</a>(\n    self,\n    amount: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Pixels.html\" title=\"struct cosmic::iced_winit::graphics::core::Pixels\">Pixels</a>&gt;,\n) -&gt; <a class=\"struct\" href=\"cosmic/iced_widget/struct.Row.html\" title=\"struct cosmic::iced_widget::Row\">Row</a>&lt;'a, Message, Theme, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Sets the horizontal spacing <em>between</em> elements.</p>\n<p>Custom margins per element do not exist in iced. You should use this\nmethod instead! While less flexible, it helps you keep spacing between\nelements consistent.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.padding\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_widget/row.rs.html#60\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_widget/struct.Row.html#tymethod.padding\" class=\"fn\">padding</a>&lt;P&gt;(self, padding: P) -&gt; <a class=\"struct\" href=\"cosmic/iced_widget/struct.Row.html\" title=\"struct cosmic::iced_widget::Row\">Row</a>&lt;'a, Message, Theme, Renderer&gt;<div class=\"where\">where\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Padding.html\" title=\"struct cosmic::iced_winit::graphics::core::Padding\">Padding</a>&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Sets the <a href=\"cosmic/iced_winit/graphics/core/struct.Padding.html\" title=\"struct cosmic::iced_winit::graphics::core::Padding\"><code>Padding</code></a> of the <a href=\"cosmic/iced_widget/struct.Row.html\" title=\"struct cosmic::iced_widget::Row\"><code>Row</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.width\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_widget/row.rs.html#66\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_widget/struct.Row.html#tymethod.width\" class=\"fn\">width</a>(\n    self,\n    width: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/enum.Length.html\" title=\"enum cosmic::iced_winit::graphics::core::Length\">Length</a>&gt;,\n) -&gt; <a class=\"struct\" href=\"cosmic/iced_widget/struct.Row.html\" title=\"struct cosmic::iced_widget::Row\">Row</a>&lt;'a, Message, Theme, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Sets the width of the <a href=\"cosmic/iced_widget/struct.Row.html\" title=\"struct cosmic::iced_widget::Row\"><code>Row</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.height\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_widget/row.rs.html#72\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_widget/struct.Row.html#tymethod.height\" class=\"fn\">height</a>(\n    self,\n    height: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/enum.Length.html\" title=\"enum cosmic::iced_winit::graphics::core::Length\">Length</a>&gt;,\n) -&gt; <a class=\"struct\" href=\"cosmic/iced_widget/struct.Row.html\" title=\"struct cosmic::iced_widget::Row\">Row</a>&lt;'a, Message, Theme, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Sets the height of the <a href=\"cosmic/iced_widget/struct.Row.html\" title=\"struct cosmic::iced_widget::Row\"><code>Row</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.align_items\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_widget/row.rs.html#78\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_widget/struct.Row.html#tymethod.align_items\" class=\"fn\">align_items</a>(self, align: <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/enum.Alignment.html\" title=\"enum cosmic::iced_winit::graphics::core::Alignment\">Alignment</a>) -&gt; <a class=\"struct\" href=\"cosmic/iced_widget/struct.Row.html\" title=\"struct cosmic::iced_widget::Row\">Row</a>&lt;'a, Message, Theme, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Sets the vertical alignment of the contents of the <a href=\"cosmic/iced_widget/struct.Row.html\" title=\"struct cosmic::iced_widget::Row\"><code>Row</code></a> .</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.push\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_widget/row.rs.html#84-87\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/iced_widget/struct.Row.html#tymethod.push\" class=\"fn\">push</a>(\n    self,\n    child: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Element.html\" title=\"struct cosmic::iced_winit::graphics::core::Element\">Element</a>&lt;'a, Message, Theme, Renderer&gt;&gt;,\n) -&gt; <a class=\"struct\" href=\"cosmic/iced_widget/struct.Row.html\" title=\"struct cosmic::iced_widget::Row\">Row</a>&lt;'a, Message, Theme, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Adds an <a href=\"cosmic/iced_winit/graphics/core/struct.Element.html\" title=\"struct cosmic::iced_winit::graphics::core::Element\"><code>Element</code></a> to the <a href=\"cosmic/iced_widget/struct.Row.html\" title=\"struct cosmic::iced_widget::Row\"><code>Row</code></a>.</p>\n</div></details></div></details>",0,"cosmic::widget::row::Row"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Widget%3CMessage,+Theme,+Renderer%3E-for-Row%3C'a,+Message,+Theme,+Renderer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_widget/row.rs.html#113-116\">source</a><a href=\"#impl-Widget%3CMessage,+Theme,+Renderer%3E-for-Row%3C'a,+Message,+Theme,+Renderer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Message, Theme, Renderer&gt; <a class=\"trait\" href=\"cosmic/iced_winit/graphics/core/trait.Widget.html\" title=\"trait cosmic::iced_winit::graphics::core::Widget\">Widget</a>&lt;Message, Theme, Renderer&gt; for <a class=\"struct\" href=\"cosmic/iced_widget/struct.Row.html\" title=\"struct cosmic::iced_widget::Row\">Row</a>&lt;'a, Message, Theme, Renderer&gt;<div class=\"where\">where\n    Renderer: <a class=\"trait\" href=\"cosmic/iced_winit/graphics/core/trait.Renderer.html\" title=\"trait cosmic::iced_winit::graphics::core::Renderer\">Renderer</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.children\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/row.rs.html#118\">source</a><a href=\"#method.children\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.children\" class=\"fn\">children</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/widget/struct.Tree.html\" title=\"struct cosmic::iced_winit::graphics::core::widget::Tree\">Tree</a>&gt;</h4></section></summary><div class='docblock'>Returns the state <a href=\"cosmic/iced_winit/graphics/core/widget/struct.Tree.html\" title=\"struct cosmic::iced_winit::graphics::core::widget::Tree\"><code>Tree</code></a> of the children of the <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html\" title=\"trait cosmic::iced_winit::graphics::core::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.diff\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/row.rs.html#122\">source</a><a href=\"#method.diff\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.diff\" class=\"fn\">diff</a>(&amp;mut self, tree: &amp;mut <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/widget/struct.Tree.html\" title=\"struct cosmic::iced_winit::graphics::core::widget::Tree\">Tree</a>)</h4></section></summary><div class='docblock'>Reconciliates the <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html\" title=\"trait cosmic::iced_winit::graphics::core::Widget\"><code>Widget</code></a> with the provided <a href=\"cosmic/iced_winit/graphics/core/widget/struct.Tree.html\" title=\"struct cosmic::iced_winit::graphics::core::widget::Tree\"><code>Tree</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/row.rs.html#126\">source</a><a href=\"#method.size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#tymethod.size\" class=\"fn\">size</a>(&amp;self) -&gt; <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Size.html\" title=\"struct cosmic::iced_winit::graphics::core::Size\">Size</a>&lt;<a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/enum.Length.html\" title=\"enum cosmic::iced_winit::graphics::core::Length\">Length</a>&gt;</h4></section></summary><div class='docblock'>Returns the <a href=\"cosmic/iced_winit/graphics/core/struct.Size.html\" title=\"struct cosmic::iced_winit::graphics::core::Size\"><code>Size</code></a> of the <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html\" title=\"trait cosmic::iced_winit::graphics::core::Widget\"><code>Widget</code></a> in lengths.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.layout\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/row.rs.html#133-138\">source</a><a href=\"#method.layout\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#tymethod.layout\" class=\"fn\">layout</a>(&amp;self, tree: &amp;mut <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/widget/struct.Tree.html\" title=\"struct cosmic::iced_winit::graphics::core::widget::Tree\">Tree</a>, renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;Renderer</a>, limits: &amp;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/layout/struct.Limits.html\" title=\"struct cosmic::iced_winit::graphics::core::layout::Limits\">Limits</a>) -&gt; <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/layout/struct.Node.html\" title=\"struct cosmic::iced_winit::graphics::core::layout::Node\">Node</a></h4></section></summary><div class='docblock'>Returns the <a href=\"cosmic/iced_winit/graphics/core/layout/struct.Node.html\" title=\"struct cosmic::iced_winit::graphics::core::layout::Node\"><code>layout::Node</code></a> of the <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html\" title=\"trait cosmic::iced_winit::graphics::core::Widget\"><code>Widget</code></a>. <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#tymethod.layout\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.operate\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/row.rs.html#153-159\">source</a><a href=\"#method.operate\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.operate\" class=\"fn\">operate</a>(\n    &amp;self,\n    tree: &amp;mut <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/widget/struct.Tree.html\" title=\"struct cosmic::iced_winit::graphics::core::widget::Tree\">Tree</a>,\n    layout: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Layout.html\" title=\"struct cosmic::iced_winit::graphics::core::Layout\">Layout</a>&lt;'_&gt;,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;Renderer</a>,\n    operation: &amp;mut dyn <a class=\"trait\" href=\"cosmic/iced_winit/graphics/core/widget/trait.Operation.html\" title=\"trait cosmic::iced_winit::graphics::core::widget::Operation\">Operation</a>&lt;<a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/widget/enum.OperationOutputWrapper.html\" title=\"enum cosmic::iced_winit::graphics::core::widget::OperationOutputWrapper\">OperationOutputWrapper</a>&lt;Message&gt;&gt;,\n)</h4></section></summary><div class='docblock'>Applies an <a href=\"cosmic/iced_winit/graphics/core/widget/trait.Operation.html\" title=\"trait cosmic::iced_winit::graphics::core::widget::Operation\"><code>Operation</code></a> to the <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html\" title=\"trait cosmic::iced_winit::graphics::core::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.on_event\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/row.rs.html#173-183\">source</a><a href=\"#method.on_event\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.on_event\" class=\"fn\">on_event</a>(\n    &amp;mut self,\n    tree: &amp;mut <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/widget/struct.Tree.html\" title=\"struct cosmic::iced_winit::graphics::core::widget::Tree\">Tree</a>,\n    event: <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/enum.Event.html\" title=\"enum cosmic::iced_winit::graphics::core::Event\">Event</a>,\n    layout: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Layout.html\" title=\"struct cosmic::iced_winit::graphics::core::Layout\">Layout</a>&lt;'_&gt;,\n    cursor: <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/mouse/enum.Cursor.html\" title=\"enum cosmic::iced_winit::graphics::core::mouse::Cursor\">Cursor</a>,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;Renderer</a>,\n    clipboard: &amp;mut dyn <a class=\"trait\" href=\"cosmic/iced_winit/graphics/core/trait.Clipboard.html\" title=\"trait cosmic::iced_winit::graphics::core::Clipboard\">Clipboard</a>,\n    shell: &amp;mut <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Shell.html\" title=\"struct cosmic::iced_winit::graphics::core::Shell\">Shell</a>&lt;'_, Message&gt;,\n    viewport: &amp;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Rectangle.html\" title=\"struct cosmic::iced_winit::graphics::core::Rectangle\">Rectangle</a>,\n) -&gt; <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/event/enum.Status.html\" title=\"enum cosmic::iced_winit::graphics::core::event::Status\">Status</a></h4></section></summary><div class='docblock'>Processes a runtime <a href=\"cosmic/iced_winit/graphics/core/enum.Event.html\" title=\"enum cosmic::iced_winit::graphics::core::Event\"><code>Event</code></a>. <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.on_event\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.mouse_interaction\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/row.rs.html#203-210\">source</a><a href=\"#method.mouse_interaction\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.mouse_interaction\" class=\"fn\">mouse_interaction</a>(\n    &amp;self,\n    tree: &amp;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/widget/struct.Tree.html\" title=\"struct cosmic::iced_winit::graphics::core::widget::Tree\">Tree</a>,\n    layout: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Layout.html\" title=\"struct cosmic::iced_winit::graphics::core::Layout\">Layout</a>&lt;'_&gt;,\n    cursor: <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/mouse/enum.Cursor.html\" title=\"enum cosmic::iced_winit::graphics::core::mouse::Cursor\">Cursor</a>,\n    viewport: &amp;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Rectangle.html\" title=\"struct cosmic::iced_winit::graphics::core::Rectangle\">Rectangle</a>,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;Renderer</a>,\n) -&gt; <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/mouse/enum.Interaction.html\" title=\"enum cosmic::iced_winit::graphics::core::mouse::Interaction\">Interaction</a></h4></section></summary><div class='docblock'>Returns the current <a href=\"cosmic/iced_winit/graphics/core/mouse/enum.Interaction.html\" title=\"enum cosmic::iced_winit::graphics::core::mouse::Interaction\"><code>mouse::Interaction</code></a> of the <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html\" title=\"trait cosmic::iced_winit::graphics::core::Widget\"><code>Widget</code></a>. <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.mouse_interaction\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.draw\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/row.rs.html#224-233\">source</a><a href=\"#method.draw\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#tymethod.draw\" class=\"fn\">draw</a>(\n    &amp;self,\n    tree: &amp;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/widget/struct.Tree.html\" title=\"struct cosmic::iced_winit::graphics::core::widget::Tree\">Tree</a>,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;mut Renderer</a>,\n    theme: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;Theme</a>,\n    style: &amp;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/renderer/struct.Style.html\" title=\"struct cosmic::iced_winit::graphics::core::renderer::Style\">Style</a>,\n    layout: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Layout.html\" title=\"struct cosmic::iced_winit::graphics::core::Layout\">Layout</a>&lt;'_&gt;,\n    cursor: <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/mouse/enum.Cursor.html\" title=\"enum cosmic::iced_winit::graphics::core::mouse::Cursor\">Cursor</a>,\n    viewport: &amp;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Rectangle.html\" title=\"struct cosmic::iced_winit::graphics::core::Rectangle\">Rectangle</a>,\n)</h4></section></summary><div class='docblock'>Draws the <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html\" title=\"trait cosmic::iced_winit::graphics::core::Widget\"><code>Widget</code></a> using the associated <code>Renderer</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.overlay\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/row.rs.html#248-253\">source</a><a href=\"#method.overlay\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.overlay\" class=\"fn\">overlay</a>&lt;'b&gt;(\n    &amp;'b mut self,\n    tree: &amp;'b mut <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/widget/struct.Tree.html\" title=\"struct cosmic::iced_winit::graphics::core::widget::Tree\">Tree</a>,\n    layout: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Layout.html\" title=\"struct cosmic::iced_winit::graphics::core::Layout\">Layout</a>&lt;'_&gt;,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;Renderer</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/overlay/struct.Element.html\" title=\"struct cosmic::iced_winit::graphics::core::overlay::Element\">Element</a>&lt;'b, Message, Theme, Renderer&gt;&gt;</h4></section></summary><div class='docblock'>Returns the overlay of the <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html\" title=\"trait cosmic::iced_winit::graphics::core::Widget\"><code>Widget</code></a>, if there is any.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.drag_destinations\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_widget/row.rs.html#277-283\">source</a><a href=\"#method.drag_destinations\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.drag_destinations\" class=\"fn\">drag_destinations</a>(\n    &amp;self,\n    state: &amp;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/widget/struct.Tree.html\" title=\"struct cosmic::iced_winit::graphics::core::widget::Tree\">Tree</a>,\n    layout: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Layout.html\" title=\"struct cosmic::iced_winit::graphics::core::Layout\">Layout</a>&lt;'_&gt;,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;Renderer</a>,\n    dnd_rectangles: &amp;mut <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/clipboard/struct.DndDestinationRectangles.html\" title=\"struct cosmic::iced_winit::graphics::core::clipboard::DndDestinationRectangles\">DndDestinationRectangles</a>,\n)</h4></section></summary><div class='docblock'>Adds the drag destination rectangles of the widget.\nRuns after the layout phase for each widget in the tree.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#51\">source</a><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.size_hint\" class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/struct.Size.html\" title=\"struct cosmic::iced_winit::graphics::core::Size\">Size</a>&lt;<a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/enum.Length.html\" title=\"enum cosmic::iced_winit::graphics::core::Length\">Length</a>&gt;</h4></section></summary><div class='docblock'>Returns a <a href=\"cosmic/iced_winit/graphics/core/struct.Size.html\" title=\"struct cosmic::iced_winit::graphics::core::Size\"><code>Size</code></a> hint for laying out the <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html\" title=\"trait cosmic::iced_winit::graphics::core::Widget\"><code>Widget</code></a>. <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.size_hint\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.tag\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#81\">source</a><a href=\"#method.tag\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.tag\" class=\"fn\">tag</a>(&amp;self) -&gt; <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/widget/tree/struct.Tag.html\" title=\"struct cosmic::iced_winit::graphics::core::widget::tree::Tag\">Tag</a></h4></section></summary><div class='docblock'>Returns the <a href=\"cosmic/iced_winit/graphics/core/widget/tree/struct.Tag.html\" title=\"struct cosmic::iced_winit::graphics::core::widget::tree::Tag\"><code>Tag</code></a> of the <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html\" title=\"trait cosmic::iced_winit::graphics::core::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.state\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#88\">source</a><a href=\"#method.state\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.state\" class=\"fn\">state</a>(&amp;self) -&gt; <a class=\"enum\" href=\"cosmic/iced_winit/graphics/core/widget/tree/enum.State.html\" title=\"enum cosmic::iced_winit::graphics::core::widget::tree::State\">State</a></h4></section></summary><div class='docblock'>Returns the <a href=\"cosmic/iced_winit/graphics/core/widget/tree/enum.State.html\" title=\"enum cosmic::iced_winit::graphics::core::widget::tree::State\"><code>State</code></a> of the <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html\" title=\"trait cosmic::iced_winit::graphics::core::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.id\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#163\">source</a><a href=\"#method.id\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.id\" class=\"fn\">id</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/id/struct.Id.html\" title=\"struct cosmic::iced_winit::graphics::core::id::Id\">Id</a>&gt;</h4></section></summary><div class='docblock'>Returns the id of the widget</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_id\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#169\">source</a><a href=\"#method.set_id\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_winit/graphics/core/trait.Widget.html#method.set_id\" class=\"fn\">set_id</a>(&amp;mut self, _id: <a class=\"struct\" href=\"cosmic/iced_winit/graphics/core/id/struct.Id.html\" title=\"struct cosmic::iced_winit::graphics::core::id::Id\">Id</a>)</h4></section></summary><div class='docblock'>Sets the id of the widget\nThis may be called while diffing the widget tree</div></details></div></details>","Widget<Message, Theme, Renderer>","cosmic::widget::row::Row"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()