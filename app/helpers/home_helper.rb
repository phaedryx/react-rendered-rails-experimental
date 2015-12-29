module HomeHelper
  def applicationjs
    wrapper = <<-JS
      var global = global || this;
      var self = self || this;
      var window = window || this;
    JS
    #ExecJS.compile(wrapper + Rails.application.assets['application'].to_s)
    #ExecJS.eval(Rails.application.assets['application'].to_s)
    #ExecJS.compile(Rails.application.assets['index'].to_s)
    context = ExecJS.compile(wrapper + Rails.application.assets['index'].to_s)
    raw(context.call("global.prerender"))
  end
end
