var hooksInstalled = false;
var hue = 0;
var IL2CPP_API_NAMES = [
  "il2cpp_init",
  "il2cpp_init_utf16",
  "il2cpp_shutdown",
  "il2cpp_set_config_dir",
  "il2cpp_set_data_dir",
  "il2cpp_set_temp_dir",
  "il2cpp_set_commandline_arguments",
  "il2cpp_set_commandline_arguments_utf16",
  "il2cpp_set_config_utf16",
  "il2cpp_set_config",
  "il2cpp_set_memory_callbacks",
  "il2cpp_memory_pool_set_region_size",
  "il2cpp_memory_pool_get_region_size",
  "il2cpp_get_corlib",
  "il2cpp_add_internal_call",
  "il2cpp_resolve_icall",
  "il2cpp_alloc",
  "il2cpp_free",
  "il2cpp_array_class_get",
  "il2cpp_array_length",
  "il2cpp_array_get_byte_length",
  "il2cpp_array_new",
  "il2cpp_array_new_specific",
  "il2cpp_array_new_full",
  "il2cpp_bounded_array_class_get",
  "il2cpp_array_element_size",
  "il2cpp_assembly_get_image",
  "il2cpp_class_enum_basetype",
  "il2cpp_class_from_system_type",
  "il2cpp_class_is_inited",
  "il2cpp_class_is_generic",
  "il2cpp_class_is_inflated",
  "il2cpp_class_is_assignable_from",
  "il2cpp_class_is_subclass_of",
  "il2cpp_class_has_parent",
  "il2cpp_class_from_il2cpp_type",
  "il2cpp_class_from_name",
  "il2cpp_class_get_element_class",
  "il2cpp_class_get_events",
  "il2cpp_class_get_fields",
  "il2cpp_class_get_nested_types",
  "il2cpp_class_get_interfaces",
  "il2cpp_class_get_properties",
  "il2cpp_class_get_property_from_name",
  "il2cpp_class_get_field_from_name",
  "il2cpp_class_get_methods",
  "il2cpp_class_get_method_from_name",
  "il2cpp_class_get_name",
  "il2cpp_class_get_namespace",
  "il2cpp_class_get_parent",
  "il2cpp_class_get_declaring_type",
  "il2cpp_class_instance_size",
  "il2cpp_class_num_fields",
  "il2cpp_class_is_valuetype",
  "il2cpp_class_is_blittable",
  "il2cpp_class_value_size",
  "il2cpp_class_get_flags",
  "il2cpp_class_is_abstract",
  "il2cpp_class_is_interface",
  "il2cpp_class_array_element_size",
  "il2cpp_class_from_type",
  "il2cpp_class_get_type",
  "il2cpp_class_get_type_token",
  "il2cpp_class_has_attribute",
  "il2cpp_class_has_references",
  "il2cpp_class_is_enum",
  "il2cpp_class_get_image",
  "il2cpp_class_get_assemblyname",
  "il2cpp_class_get_rank",
  "il2cpp_class_get_data_size",
  "il2cpp_class_get_static_field_data",
  "il2cpp_stats_dump_to_file",
  "il2cpp_stats_get_value",
  "il2cpp_domain_get",
  "il2cpp_domain_assembly_open",
  "il2cpp_domain_get_assemblies",
  "il2cpp_raise_exception",
  "il2cpp_exception_from_name_msg",
  "il2cpp_get_exception_argument_null",
  "il2cpp_format_exception",
  "il2cpp_format_stack_trace",
  "il2cpp_unhandled_exception",
  "il2cpp_native_stack_trace",
  "il2cpp_field_get_name",
  "il2cpp_field_get_flags",
  "il2cpp_field_get_from_reflection",
  "il2cpp_field_get_parent",
  "il2cpp_field_get_object",
  "il2cpp_field_get_offset",
  "il2cpp_field_get_type",
  "il2cpp_field_get_value",
  "il2cpp_field_get_value_object",
  "il2cpp_field_has_attribute",
  "il2cpp_field_set_value",
  "il2cpp_field_set_value_object",
  "il2cpp_field_is_literal",
  "il2cpp_gc_collect",
  "il2cpp_gc_collect_a_little",
  "il2cpp_gc_start_incremental_collection",
  "il2cpp_gc_enable",
  "il2cpp_gc_disable",
  "il2cpp_gc_is_disabled",
  "il2cpp_gc_set_mode",
  "il2cpp_gc_is_incremental",
  "il2cpp_gc_get_max_time_slice_ns",
  "il2cpp_gc_set_max_time_slice_ns",
  "il2cpp_gc_get_used_size",
  "il2cpp_gc_get_heap_size",
  "il2cpp_gc_foreach_heap",
  "il2cpp_stop_gc_world",
  "il2cpp_start_gc_world",
  "il2cpp_gc_alloc_fixed",
  "il2cpp_gc_free_fixed",
  "il2cpp_gchandle_new",
  "il2cpp_gchandle_new_weakref",
  "il2cpp_gchandle_get_target",
  "il2cpp_gchandle_foreach_get_target",
  "il2cpp_gc_wbarrier_set_field",
  "il2cpp_gc_has_strict_wbarriers",
  "il2cpp_gc_set_external_allocation_tracker",
  "il2cpp_gc_set_external_wbarrier_tracker",
  "il2cpp_gchandle_free",
  "il2cpp_object_header_size",
  "il2cpp_array_object_header_size",
  "il2cpp_offset_of_array_length_in_array_object_header",
  "il2cpp_offset_of_array_bounds_in_array_object_header",
  "il2cpp_allocation_granularity",
  "il2cpp_unity_liveness_allocate_struct",
  "il2cpp_unity_liveness_calculation_from_root",
  "il2cpp_unity_liveness_calculation_from_statics",
  "il2cpp_unity_liveness_finalize",
  "il2cpp_unity_liveness_free_struct",
  "il2cpp_method_get_return_type",
  "il2cpp_method_get_from_reflection",
  "il2cpp_method_get_object",
  "il2cpp_method_get_name",
  "il2cpp_method_is_generic",
  "il2cpp_method_is_inflated",
  "il2cpp_method_is_instance",
  "il2cpp_method_get_param_count",
  "il2cpp_method_get_param",
  "il2cpp_method_get_class",
  "il2cpp_method_has_attribute",
  "il2cpp_method_get_declaring_type",
  "il2cpp_method_get_flags",
  "il2cpp_method_get_token",
  "il2cpp_method_get_param_name",
  "il2cpp_profiler_install",
  "il2cpp_profiler_set_events",
  "il2cpp_profiler_install_enter_leave",
  "il2cpp_profiler_install_allocation",
  "il2cpp_profiler_install_gc",
  "il2cpp_profiler_install_fileio",
  "il2cpp_profiler_install_thread",
  "il2cpp_property_get_name",
  "il2cpp_property_get_get_method",
  "il2cpp_property_get_set_method",
  "il2cpp_property_get_parent",
  "il2cpp_property_get_flags",
  "il2cpp_object_get_class",
  "il2cpp_object_get_size",
  "il2cpp_object_get_virtual_method",
  "il2cpp_object_new",
  "il2cpp_object_unbox",
  "il2cpp_value_box",
  "il2cpp_monitor_enter",
  "il2cpp_monitor_try_enter",
  "il2cpp_monitor_exit",
  "il2cpp_monitor_pulse",
  "il2cpp_monitor_pulse_all",
  "il2cpp_monitor_wait",
  "il2cpp_monitor_try_wait",
  "il2cpp_runtime_invoke_convert_args",
  "il2cpp_runtime_invoke",
  "il2cpp_runtime_class_init",
  "il2cpp_runtime_object_init",
  "il2cpp_runtime_object_init_exception",
  "il2cpp_runtime_unhandled_exception_policy_set",
  "il2cpp_string_length",
  "il2cpp_string_chars",
  "il2cpp_string_new",
  "il2cpp_string_new_wrapper",
  "il2cpp_string_new_utf16",
  "il2cpp_string_new_len",
  "il2cpp_string_intern",
  "il2cpp_string_is_interned",
  "il2cpp_thread_current",
  "il2cpp_thread_attach",
  "il2cpp_thread_detach",
  "il2cpp_is_vm_thread",
  "il2cpp_current_thread_walk_frame_stack",
  "il2cpp_thread_walk_frame_stack",
  "il2cpp_current_thread_get_top_frame",
  "il2cpp_thread_get_top_frame",
  "il2cpp_current_thread_get_frame_at",
  "il2cpp_thread_get_frame_at",
  "il2cpp_current_thread_get_stack_depth",
  "il2cpp_thread_get_stack_depth",
  "il2cpp_set_default_thread_affinity",
  "il2cpp_override_stack_backtrace",
  "il2cpp_type_get_object",
  "il2cpp_type_get_type",
  "il2cpp_type_get_class_or_element_class",
  "il2cpp_type_get_name",
  "il2cpp_type_get_assembly_qualified_name",
  "il2cpp_type_get_reflection_name",
  "il2cpp_type_is_byref",
  "il2cpp_type_get_attrs",
  "il2cpp_type_equals",
  "il2cpp_type_is_static",
  "il2cpp_type_is_pointer_type",
  "il2cpp_image_get_assembly",
  "il2cpp_image_get_name",
  "il2cpp_image_get_filename",
  "il2cpp_image_get_entry_point",
  "il2cpp_image_get_class_count",
  "il2cpp_image_get_class",
  "il2cpp_capture_memory_snapshot",
  "il2cpp_free_captured_memory_snapshot",
  "il2cpp_set_find_plugin_callback",
  "il2cpp_register_log_callback",
  "il2cpp_debugger_set_agent_options",
  "il2cpp_is_debugger_attached",
  "il2cpp_register_debugger_agent_transport",
  "il2cpp_debug_foreach_method",
  "il2cpp_debug_get_method_info",
  "il2cpp_unity_install_unitytls_interface",
  "il2cpp_custom_attrs_from_class",
  "il2cpp_custom_attrs_from_method",
  "il2cpp_custom_attrs_from_field",
  "il2cpp_custom_attrs_has_attr",
  "il2cpp_custom_attrs_get_attr",
  "il2cpp_custom_attrs_construct",
  "il2cpp_custom_attrs_free",
  "il2cpp_type_get_name_chunked",
  "il2cpp_class_set_userdata",
  "il2cpp_class_get_userdata_offset",
  "il2cpp_class_for_each",
  "il2cpp_unity_set_android_network_up_state_func"
];
Il2Cpp.$config = Il2Cpp.$config || {};
Il2Cpp.$config.exports = {};
for (const api of IL2CPP_API_NAMES) {
  Il2Cpp.$config.exports[api] = () => Il2Cpp.module.findExportByName(api);
}
var thngtohook = "il2cpp_runtime_invoke_convert_args";
var flingForce = 5;
var flingEnabled = true;
var menuName = "Explodings cewl menu -- thank ya thatguyronin for da temp";
var menu = null;
var reference = null;
var referenceCollider = null;
var cachedClickClip = null;
var cachedClickSource = null;
var buttonClickDelay = 0;
var LerpMenu = false;
var righthand = false;
var deltaTime = 0;
var rgbColorEnabled = false;
var lastRgbApply = 0;
var outBoolBuf = null;
var lastClickScan = 0;
var cameraClassCache = null;
var longArmsOriginalLength = null;
var time = 0;
var flySpeed = 20;
var bgColor = [0.2, 0.15, 0.25, 0.85];
var textColor = [0.95, 0.85, 1, 1];
var buttonColor = [0.3, 0.2, 0.4, 0.8];
var buttonPressedColor = [0.5, 0.35, 0.65, 1];
var MENU_SCALE = 1.15;
var THEMES = [
  { name: "Dark", bg: [0.08, 0.08, 0.08, 0.98], text: [0.95, 0.95, 0.95, 1], button: [0.15, 0.15, 0.15, 1], buttonPressed: [0.3, 0.3, 0.3, 1], outline: [0.15, 0.15, 0.15, 1], pageOutline: [0.2, 0.2, 0.2, 1], buttonOutline: [0.2, 0.2, 0.2, 1] },
  { name: "Blue", bg: [0.05, 0.07, 0.12, 0.98], text: [0.9, 0.95, 1, 1], button: [0.1, 0.16, 0.28, 1], buttonPressed: [0.16, 0.28, 0.45, 1], outline: [0.12, 0.2, 0.35, 1], pageOutline: [0.15, 0.25, 0.4, 1], buttonOutline: [0.15, 0.25, 0.4, 1] },
  { name: "Red", bg: [0.12, 0.05, 0.05, 0.98], text: [1, 0.92, 0.92, 1], button: [0.28, 0.1, 0.1, 1], buttonPressed: [0.45, 0.15, 0.15, 1], outline: [0.35, 0.12, 0.12, 1], pageOutline: [0.4, 0.15, 0.15, 1], buttonOutline: [0.4, 0.15, 0.15, 1] },
  { name: "Green", bg: [0.05, 0.1, 0.06, 0.98], text: [0.92, 1, 0.93, 1], button: [0.1, 0.22, 0.12, 1], buttonPressed: [0.16, 0.35, 0.18, 1], outline: [0.12, 0.28, 0.15, 1], pageOutline: [0.15, 0.32, 0.18, 1], buttonOutline: [0.15, 0.32, 0.18, 1] }
];
var themeIndex = 0;
var menuOutlineColor = THEMES[0].outline;
var pageOutlineColor = THEMES[0].pageOutline;
var buttonOutlineColor = THEMES[0].buttonOutline;
function applyTheme() {
  const t = THEMES[themeIndex];
  bgColor = t.bg;
  textColor = t.text;
  buttonColor = t.button;
  buttonPressedColor = t.buttonPressed;
  menuOutlineColor = t.outline;
  pageOutlineColor = t.pageOutline;
  buttonOutlineColor = t.buttonOutline;
}
function applyThemeId(i) {
  themeIndex = i;
  applyTheme();
}
applyTheme();
var menuOutlineThickness = 9e-3 * MENU_SCALE;
var controlOutlineThickness = 75e-4 * MENU_SCALE;
var rowOutlineThickness = 65e-4 * MENU_SCALE;
var outlinesEnabled = true;
var rowButtonHeight = 0.06 * MENU_SCALE;
var rowButtonWidth = 0.61 * MENU_SCALE;
var rowButtonSpacing = 0.032 * MENU_SCALE;
var disconnectButtonWidth = 0.62 * MENU_SCALE;
var buttonsPerPage = 9;
var currentNotification = "";
var notifactionResetTime = 0;
var currentCategory = 0;
var currentPage = 0;
var frameCount = 0;
var menuCanvas = null;
var leftAxis = null;
var rightAxis = null;
var clickableButtons = [];
var outAxis = null;
function ensureOutAxis() {
  if (outAxis === null)
    outAxis = Il2Cpp.alloc(8);
  return outAxis;
}
var strobeEnabled = false;
var lastStrobeTime = 0;
var leftPrimary = false;
var leftSecondary = false;
var rightPrimary = false;
var rightSecondary = false;
var leftGrab = false;
var rightGrab = false;
var leftTrigger = false;
var rightTrigger = false;
var leftStick = false;
var rightStick = false;
var GunPointer = null;
var GunLine = null;
var gunColor = [0.6784, 0.498, 0.8549, 0.75];
var menuInitTime = 0;
function Hooks() {
  Il2Cpp.perform(() => {
    const images = {
      "AssemblyCSharp": Il2Cpp.domain.assembly("Assembly-CSharp").image,
      "UnityEngine.CoreModule": Il2Cpp.domain.assembly("UnityEngine.CoreModule").image,
      "UnityEngine.PhysicsModule": Il2Cpp.domain.assembly("UnityEngine.PhysicsModule").image,
      "UnityEngine.UIModule": Il2Cpp.domain.assembly("UnityEngine.UIModule").image,
      "UnityEngine.UI": Il2Cpp.domain.assembly("UnityEngine.UI").image,
      "UnityEngine.TextRenderingModule": Il2Cpp.domain.assembly("UnityEngine.TextRenderingModule").image,
      "Unity.TextMeshPro": Il2Cpp.domain.assembly("Unity.TextMeshPro").image,
      "UnityEngine.XRModule": Il2Cpp.domain.assembly("UnityEngine.XRModule").image,
      "UnityEngine.AudioModule": Il2Cpp.domain.assembly("UnityEngine.AudioModule").image,
      "UnityEngine.AssetBundleModule": Il2Cpp.domain.assembly("UnityEngine.AssetBundleModule").image,
      "PhotonUnityNetworking": Il2Cpp.domain.assembly("PhotonUnityNetworking").image,
      "PhotonVoice": (() => {
        try {
          return Il2Cpp.domain.assembly("PhotonVoice").image;
        } catch (e) {
          return null;
        }
      })(),
      "PhotonVoicePUN": (() => {
        try {
          return Il2Cpp.domain.assembly("PhotonVoicePUN").image;
        } catch (e) {
          try {
            return Il2Cpp.domain.assembly("PhotonVoice.PUN").image;
          } catch (e2) {
            return null;
          }
        }
      })()
    };
    const AssemblyCSharp = images["AssemblyCSharp"];
    const UnityEngineCore = images["UnityEngine.CoreModule"];
    const UnityEnginePhysics = images["UnityEngine.PhysicsModule"];
    const UnityEngineUI = images["UnityEngine.UI"];
    const UnityEngineUIModule = images["UnityEngine.UIModule"];
    const UnityEngineTextRendering = images["UnityEngine.TextRenderingModule"];
    const UnityTextMeshPro = images["Unity.TextMeshPro"];
    const UnityEngineXR = images["UnityEngine.XRModule"];
    const UnityEngineAudio = images["UnityEngine.AudioModule"];
    const PhotonUnityNetworking = images["PhotonUnityNetworking"];
    let AudioSourceClass = null;
    let AudioClipClass = null;
    try {
      if (UnityEngineAudio != null) {
        AudioSourceClass = UnityEngineAudio.class("UnityEngine.AudioSource");
        AudioClipClass = UnityEngineAudio.class("UnityEngine.AudioClip");
      }
    } catch (e) {
    }
    let RecorderClass = null;
    try {
      if (images["PhotonVoice"] != null)
        RecorderClass = images["PhotonVoice"].class("Photon.Voice.Unity.Recorder");
    } catch (e) {
    }
    let PhotonVoiceViewClass = null;
    try {
      if (images["PhotonVoicePUN"] != null)
        PhotonVoiceViewClass = images["PhotonVoicePUN"].class("Photon.Voice.PUN.PhotonVoiceView");
    } catch (e) {
    }
    let PunVoiceClientClass = null;
    try {
      if (images["PhotonVoicePUN"] != null)
        PunVoiceClientClass = images["PhotonVoicePUN"].class("Photon.Voice.PUN.PunVoiceClient");
    } catch (e) {
    }
    let VoiceConnectionClass = null;
    try {
      if (images["PhotonVoice"] != null)
        VoiceConnectionClass = images["PhotonVoice"].class("Photon.Voice.Unity.VoiceConnection");
    } catch (e) {
    }
    let SpeakerClass = null;
    try {
      if (images["PhotonVoice"] != null)
        SpeakerClass = images["PhotonVoice"].class("Photon.Voice.Unity.Speaker");
    } catch (e) {
    }
    const InputDevices = UnityEngineXR.class("UnityEngine.XR.InputDevices");
    const CommonUsages = UnityEngineXR.class("UnityEngine.XR.CommonUsages");
    const GameObject = UnityEngineCore.class("UnityEngine.GameObject");
    const Object = UnityEngineCore.class("UnityEngine.Object");
    const TransformClass = UnityEngineCore.class("UnityEngine.Transform");
    const Vector3 = UnityEngineCore.class("UnityEngine.Vector3");
    const Quaternion = UnityEngineCore.class("UnityEngine.Quaternion");
    const Time = UnityEngineCore.class("UnityEngine.Time");
    const Resources = UnityEngineCore.class("UnityEngine.Resources");
    const Material = UnityEngineCore.class("UnityEngine.Material");
    const Renderer = UnityEngineCore.class("UnityEngine.Renderer");
    const Shader = UnityEngineCore.class("UnityEngine.Shader");
    const RectTransform = UnityEngineCore.class("UnityEngine.RectTransform");
    const LineRenderer = UnityEngineCore.class("UnityEngine.LineRenderer");
    const PhotonNetwork = PhotonUnityNetworking.class("Photon.Pun.PhotonNetwork");
    const classOf = (image, name) => {
      try {
        return image.class(name);
      } catch (_) {
        return null;
      }
    };
    const LARImage = (() => {
      try {
        return Il2Cpp.domain.assembly("LethalApe.Game").image;
      } catch (e) {
        return AssemblyCSharp;
      }
    })();
    const PlayerClass = classOf(LARImage, "LethalApeR.Locomotion.Player");
    const BaseButtonClass = classOf(LARImage, "LethalApeR.BaseButton");
    const ModsClass = classOf(LARImage, "Mods");
    const GorillaSimClass = classOf(AssemblyCSharp, "GorillaLocomotion.GorillaSim");
    const LARMenuClass = classOf(LARImage, "LethalApeR.LARMenu");
    const PhotonVRPlayerClass = classOf(LARImage, "LethalApeR.Networking.PhotonVRPlayer");
    const PVPPlayerClass = classOf(LARImage, "LethalApeR.PVPPlayer");
    const PhotonVRManagerClass = classOf(LARImage, "LethalApeR.Networking.PhotonVRManager");
    const AdminGunClass = classOf(LARImage, "LethalApeR.AdminGun");
    const ScrapSystemClass = classOf(LARImage, "LethalApeR.Scrap.ScrapSystem");
    const PVPManagerClass = classOf(LARImage, "LethalApeR.Gameplay.Pvp.PVPManager");
    const PlayFabManagerClass = classOf(LARImage, "LethalApeR.Backend.PlayFabManager");
    const WardrobeManagerClass = classOf(LARImage, "LethalApeR.Backend.WardrobeManager");
    const PlayerPrefsClass = (() => {
      try {
        return Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.PlayerPrefs");
      } catch (e) {
        return null;
      }
    })();
    let GTPlayer = null;
    let playerRigidBody = null;
    let cachedHookPlayerHandle = null;
    let leftHandTransform = null;
    let rightHandTransform = null;
    let headCollider = null;
    let bodyCollider = null;
    const BoxCollider = UnityEnginePhysics.class("UnityEngine.BoxCollider");
    const Collider = UnityEnginePhysics.class("UnityEngine.Collider");
    const Rigidbody = UnityEnginePhysics.class("UnityEngine.Rigidbody");
    const Physics = UnityEnginePhysics.class("UnityEngine.Physics");
    const MeshCollider = UnityEnginePhysics.class("UnityEngine.MeshCollider");
    const Canvas = UnityEngineUIModule.class("UnityEngine.Canvas");
    const CanvasScaler = UnityEngineUI.class("UnityEngine.UI.CanvasScaler");
    const GraphicRaycaster = UnityEngineUI.class("UnityEngine.UI.GraphicRaycaster");
    const Text = UnityEngineUI.class("UnityEngine.UI.Text");
    const Font = UnityEngineTextRendering.class("UnityEngine.Font");
    let UberShader = null;
    let TextShader = null;
    let zeroVector = null;
    let oneVector = null;
    let identityQuaternion = null;
    let arial = null;
    function Destroy(object) {
      Object.method("Destroy", 1).invoke(object);
    }
    function getComponent(obj, type) {
      if (!obj || !type || !type.type)
        return null;
      return obj.method("GetComponent").overload("System.Type").invoke(type.type.object);
    }
    function getComponentInParent(obj, type) {
      if (!obj || !type || !type.type)
        return null;
      return obj.method("GetComponentInParent").overload("System.Type").invoke(type.type.object);
    }
    function addComponent(obj, type) {
      if (!obj || !type || !type.type)
        return null;
      return obj.method("AddComponent").overload("System.Type").invoke(type.type.object);
    }
    function findObjectsOfType(type) {
      if (!type)
        return [];
      try {
        if (type.type)
          return Object.method("FindObjectsOfType").overload("System.Type").invoke(type.type.object);
      } catch (e) {
      }
      try {
        return Object.method("FindObjectsOfType").inflate(type).invoke();
      } catch (e) {
        return [];
      }
    }
    function findObjectOfType(type) {
      if (!type)
        return null;
      try {
        if (type.type)
          return Object.method("FindObjectOfType").overload("System.Type").invoke(type.type.object);
      } catch (e) {
      }
      try {
        return Object.method("FindObjectOfType").inflate(type).invoke();
      } catch (e) {
        return null;
      }
    }
    function getTransform(obj) {
      return obj.method("get_transform").invoke();
    }
    function playerIsLocal(player) {
      return player.method("get_IsMine").invoke();
    }
    function sendAllOutgoing() {
      PhotonNetwork.method("SendAllOutgoingCommands").invoke();
    }
    function vec3(x, y, z) {
      const temp = GameObject.method("CreatePrimitive").invoke(3);
      const t = temp.method("get_transform").invoke();
      t.method("set_position").invoke([x, y, z]);
      const pos = t.method("get_position").invoke();
      Object.method("Destroy", 1).invoke(temp);
      return pos;
    }
    function identityQ() {
      const temp = GameObject.method("CreatePrimitive").invoke(3);
      const q = temp.method("get_transform").invoke().method("get_rotation").invoke();
      Object.method("Destroy", 1).invoke(temp);
      return q;
    }
    function SetName(name) {
      try {
        PhotonNetwork.method("set_NickName").invoke(Il2Cpp.string(name));
      } catch (e) {
      }
      try {
        if (PhotonVRManagerClass != null)
          PhotonVRManagerClass.method("SetUsername").invoke(Il2Cpp.string(name));
      } catch (e) {
      }
    }
    function sendNotification(text = "", requiresReload = true, clearTime = 5) {
      const isOld = currentNotification == text;
      notifactionResetTime = time + clearTime;
      currentNotification = text;
      if (requiresReload && !isOld)
        reloadMenu();
    }
    function setupPanelMaterial(material, colorArr) {
      const setFloat = (name, value) => {
        try {
          material.method("SetFloat").overload("System.String", "System.Single").invoke(Il2Cpp.string(name), value);
        } catch (_) {
        }
      };
      const setColor3 = (name, value) => {
        try {
          material.method("SetColor").overload("System.String", "UnityEngine.Color").invoke(Il2Cpp.string(name), value);
        } catch (_) {
        }
      };
      setColor3("_BaseColor", colorArr);
      setColor3("_Color", colorArr);
      const emission = [colorArr[0] * 0.25, colorArr[1] * 0.25, colorArr[2] * 0.25, 1];
      setColor3("_EmissionColor", emission);
      try {
        material.method("EnableKeyword").invoke(Il2Cpp.string("_EMISSION"));
      } catch (_) {
      }
      try {
        material.method("SetOverrideTag").invoke(Il2Cpp.string("RenderType"), Il2Cpp.string("Opaque"));
      } catch (_) {
      }
      setFloat("_Surface", 0);
      setFloat("_ZWrite", 1);
      setFloat("_Cull", 0);
      setFloat("_Smoothness", 0);
      setFloat("_Glossiness", 0);
      setFloat("_Metallic", 0);
      try {
        material.method("DisableKeyword").invoke(Il2Cpp.string("_SURFACE_TYPE_TRANSPARENT"));
      } catch (_) {
      }
      try {
        material.method("DisableKeyword").invoke(Il2Cpp.string("_ALPHAPREMULTIPLY_ON"));
      } catch (_) {
      }
      try {
        material.method("DisableKeyword").invoke(Il2Cpp.string("_ALPHABLEND_ON"));
      } catch (_) {
      }
      try {
        material.method("set_renderQueue").invoke(2e3);
      } catch (_) {
      }
    }
    function setupOpaqueMaterial(material) {
      try {
        material.method("SetFloat").overload("System.String", "System.Single").invoke(Il2Cpp.string("_ZWrite"), 1);
      } catch (_) {
      }
      try {
        material.method("SetFloat").overload("System.String", "System.Single").invoke(Il2Cpp.string("_ZTest"), 4);
      } catch (_) {
      }
      try {
        material.method("SetFloat").overload("System.String", "System.Single").invoke(Il2Cpp.string("_SrcBlend"), 1);
      } catch (_) {
      }
      try {
        material.method("SetFloat").overload("System.String", "System.Single").invoke(Il2Cpp.string("_DstBlend"), 0);
      } catch (_) {
      }
      try {
        material.method("SetOverrideTag").invoke(Il2Cpp.string("RenderType"), Il2Cpp.string("Opaque"));
      } catch (_) {
      }
      try {
        material.method("DisableKeyword").invoke(Il2Cpp.string("_ALPHABLEND_ON"));
      } catch (_) {
      }
      try {
        material.method("DisableKeyword").invoke(Il2Cpp.string("_ALPHAPREMULTIPLY_ON"));
      } catch (_) {
      }
      try {
        material.method("set_renderQueue").invoke(2e3);
      } catch (_) {
      }
    }
    function createOutlinedRoundedObject(pos, scale, fillColor, outlineColor, parent, interactive = false, outlineSize = 0.025) {
      const createLayer = (center, size, color, keepCollider) => {
        return createObject(center, identityQuaternion, size, 3, color, parent, keepCollider);
      };
      if (outlinesEnabled && outlineSize > 0) {
        createLayer([pos[0] - 1e-3, pos[1], pos[2]], [scale[0], scale[1] + outlineSize * 2, scale[2] + outlineSize * 2], outlineColor, false);
      }
      return createLayer(pos, scale, fillColor, interactive);
    }
    function createObject(pos = zeroVector, rot = identityQuaternion, scale = oneVector, primitiveType = 3, colorArr = [1, 1, 1, 1], parent = null, enableCollider = false) {
      const obj = GameObject.method("CreatePrimitive").invoke(primitiveType);
      const renderer = getComponent(obj, Renderer);
      if (colorArr[3] == 0) {
        renderer.method("set_enabled").invoke(false);
      } else {
        const material = renderer.method("get_material").invoke();
        material.method("set_shader").invoke(UberShader);
        material.method("set_color").invoke(colorArr);
        try {
          setupPanelMaterial(material, colorArr);
        } catch (_) {
          try {
            setupOpaqueMaterial(material);
          } catch (_2) {
          }
        }
      }
      const col = getComponent(obj, Collider);
      if (!col.isNull()) {
        if (enableCollider) {
          col.method("set_enabled").invoke(true);
          col.method("set_isTrigger").invoke(true);
        } else {
          Object.method("Destroy", 1).invoke(col);
        }
      }
      const transform = getTransform(obj);
      if (parent != null)
        transform.method("SetParent", 2).invoke(parent, false);
      transform.method("set_position").invoke(pos);
      transform.method("set_rotation").invoke(rot);
      transform.method("set_localScale").invoke(scale);
      return obj;
    }
    function renderMenuText(canvasObject, text = "", color = [1, 1, 1, 1], pos = zeroVector, size = oneVector) {
      const title = addComponent(createObject(zeroVector, identityQuaternion, oneVector, 3, [0, 0, 0, 0], getTransform(canvasObject)), Text);
      title.method("set_text").invoke(Il2Cpp.string(text));
      title.method("set_font").invoke(arial);
      title.method("set_fontSize").invoke(1);
      title.method("set_color").invoke(color);
      title.method("set_fontStyle").invoke(3);
      title.method("set_alignment").invoke(4);
      title.method("set_resizeTextForBestFit").invoke(true);
      title.method("set_resizeTextMinSize").invoke(0);
      try {
        title.method("set_resizeTextMaxSize").invoke(16.8);
      } catch (_) {
      }
      const rectTransform = getComponent(title, RectTransform);
      rectTransform.method("set_sizeDelta").invoke(size);
      rectTransform.method("set_position").invoke(pos);
      rectTransform.method("set_rotation").invoke(Quaternion.method("Euler").invoke(180, 90, 90));
    }
    function updateButtonColor(button, buttonData) {
      const RendererClass = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.Renderer");
      const renderer = getComponent(button, RendererClass);
      if (!renderer)
        return;
      const material = renderer.method("get_material").invoke();
      const c = buttonData.enabled ? buttonPressedColor : buttonColor;
      try {
        material.method("set_color").invoke(c);
      } catch (_) {
      }
      try {
        material.method("SetColor").overload("System.String", "UnityEngine.Color").invoke(Il2Cpp.string("_BaseColor"), c);
      } catch (_) {
      }
      try {
        material.method("SetColor").overload("System.String", "UnityEngine.Color").invoke(Il2Cpp.string("_EmissionColor"), [c[0] * 0.25, c[1] * 0.25, c[2] * 0.25, 1]);
      } catch (_) {
      }
    }
    function reloadMenu() {
      if (menu != null) {
        Object.method("Destroy", 1).invoke(menu);
        menu = null;
      }
    }
    let gunLocked = false;
    let lockTarget = null;
    let gunRenderedLastFrame = false;
    function renderMenu() {
      try {
        menu = createObject(zeroVector, identityQuaternion, [0.1, 0.3, 0.3825], 3, [0, 0, 0, 0]);
        Destroy(getComponent(menu, BoxCollider));
        try {
          menu.method("set_layer").invoke(31);
        } catch (_) {
        }
        const S = MENU_SCALE;
        const panelScaleZ = 0.76 * S;
        const panelCenterZ = -0.03 * S;
        const pageCenterZ = -0.045 * S;
        createOutlinedRoundedObject([0.1 * S, 0, panelCenterZ], [0.1 * S, 0.72 * S, panelScaleZ], bgColor, menuOutlineColor, getTransform(menu), false, menuOutlineThickness);
        try {
          const CameraClass2 = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.Camera");
          const cameras = Object.method("FindObjectsOfType").overload("System.Type").invoke(CameraClass2.type.object);
          for (let ci = 0; ci < cameras.length; ci++) {
            try {
              const cam = cameras.get(ci);
              const maskBefore = cam.method("get_cullingMask").invoke();
              if ((maskBefore & 1 << 31) === 0)
                cam.method("set_cullingMask").invoke(maskBefore | 1 << 31);
            } catch (_) {
            }
          }
        } catch (_) {
        }
        const canvasObject = createObject(zeroVector, identityQuaternion, oneVector, 3, [0, 0, 0, 0], getTransform(menu));
        const canvas = addComponent(canvasObject, Canvas);
        Destroy(getComponent(canvasObject, BoxCollider));
        const canvasScaler = addComponent(canvasObject, CanvasScaler);
        addComponent(canvasObject, GraphicRaycaster);
        canvas.method("set_renderMode").invoke(2);
        canvas.method("set_sortingOrder").invoke(32767);
        canvasScaler.method("set_dynamicPixelsPerUnit").invoke(1e3);
        menuCanvas = canvas;
        try {
          const CameraClass = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.Camera");
          let mainCam = CameraClass.method("get_main").invoke();
          if (!mainCam || mainCam.isNull()) {
            const sz = CameraClass.method("get_allCamerasCount").invoke();
            if (sz > 0) {
              const camArr = CameraClass.method("GetAllCameras", 1).invoke([]);
              for (let ci = 0; ci < sz; ci++) {
                const c = camArr.get(ci);
                if (c && !c.isNull() && c.method("get_isActiveAndEnabled").invoke()) {
                  mainCam = c;
                  break;
                }
              }
            }
          }
          if (mainCam && !mainCam.isNull())
            canvas.method("set_worldCamera").invoke(mainCam);
        } catch (_) {
        }
        renderMenuText(canvasObject, menuName + ` [${currentPage + 1}]`, textColor, [0.11 * S, 0, 0.103 * S], [0.7 * S, 0.06 * S]);
        if (time > notifactionResetTime)
          currentNotification = "";
        renderMenuText(canvasObject, currentNotification.length > 0 ? "[" + currentNotification + "]" : "", textColor, [0.11 * S, 0, 0.225 * S], [0.7 * S, 0.045 * S]);
        const homeZ = 0.205 * S;
        clickableButtons = [];
        {
          const homeButton = createOutlinedRoundedObject([0.1 * S, 0, homeZ], [0.09 * S, disconnectButtonWidth, 0.065 * S], buttonColor, pageOutlineColor, getTransform(menu), true, controlOutlineThickness);
          homeButton.method("set_name").invoke(Il2Cpp.string("@GlobalReturn"));
          addComponent(homeButton, BaseButtonClass);
          if (AudioSourceClass != null) {
            try {
              addComponent(homeButton, AudioSourceClass);
            } catch (e) {
            }
          }
          getComponent(homeButton, Collider).method("set_isTrigger").invoke(true);
          clickableButtons.push({ name: "GlobalReturn", collider: getComponent(homeButton, Collider), go: homeButton });
          renderMenuText(canvasObject, "home page", textColor, [0.11 * S, 0, homeZ], [0.7 * S, 0.05 * S]);
        }
        {
          const pageButton = createOutlinedRoundedObject([0.1 * S, 0.14 * S, pageCenterZ], [0.09 * S, 0.135 * S, 0.64 * S], buttonColor, pageOutlineColor, getTransform(menu), true, controlOutlineThickness);
          pageButton.method("set_name").invoke(Il2Cpp.string("@PreviousPage"));
          addComponent(pageButton, BaseButtonClass);
          if (AudioSourceClass != null) {
            try {
              addComponent(pageButton, AudioSourceClass);
            } catch (e) {
            }
          }
          getComponent(pageButton, Collider).method("set_isTrigger").invoke(true);
          clickableButtons.push({ name: "PreviousPage", collider: getComponent(pageButton, Collider), go: pageButton });
          renderMenuText(canvasObject, "<", textColor, [0.11 * S, 0.14 * S, pageCenterZ], [0.25 * S, 0.075 * S]);
        }
        {
          const pageButton = createOutlinedRoundedObject([0.1 * S, -0.14 * S, pageCenterZ], [0.09 * S, 0.135 * S, 0.64 * S], buttonColor, pageOutlineColor, getTransform(menu), true, controlOutlineThickness);
          pageButton.method("set_name").invoke(Il2Cpp.string("@NextPage"));
          addComponent(pageButton, BaseButtonClass);
          if (AudioSourceClass != null) {
            try {
              addComponent(pageButton, AudioSourceClass);
            } catch (e) {
            }
          }
          getComponent(pageButton, Collider).method("set_isTrigger").invoke(true);
          clickableButtons.push({ name: "NextPage", collider: getComponent(pageButton, Collider), go: pageButton });
          renderMenuText(canvasObject, ">", textColor, [0.11 * S, -0.14 * S, pageCenterZ], [0.25 * S, 0.075 * S]);
        }
        const maxCurrentPage = Math.max(Math.ceil(buttons[currentCategory].length / buttonsPerPage) - 1, 0);
        if (currentPage > maxCurrentPage)
          currentPage = maxCurrentPage;
        const targetMods = buttons[currentCategory].slice(currentPage * buttonsPerPage).slice(0, buttonsPerPage);
        const rowStartZ = 0.075 * S;
        let i = 0;
        targetMods.forEach((buttonData) => {
          const rowZ = rowStartZ - i * rowButtonSpacing;
          const button = createOutlinedRoundedObject([0.105 * S, 0, rowZ], [0.09 * S, rowButtonWidth, rowButtonHeight], buttonData.enabled ? buttonPressedColor : buttonColor, buttonOutlineColor, getTransform(menu), true, rowOutlineThickness);
          button.method("set_name").invoke(Il2Cpp.string("@" + buttonData.buttonText));
          addComponent(button, BaseButtonClass);
          if (AudioSourceClass != null) {
            try {
              addComponent(button, AudioSourceClass);
            } catch (e) {
            }
          }
          getComponent(button, Collider).method("set_isTrigger").invoke(true);
          clickableButtons.push({ name: buttonData.buttonText, collider: getComponent(button, Collider), go: button });
          renderMenuText(canvasObject, (buttonData.enabled ? "[+] " : "") + buttonData.buttonText, textColor, [0.11 * S, 0, rowZ], [0.8 * S, 0.05 * S]);
          updateButtonColor(button, buttonData);
          i++;
        });
      } catch (e) {
      }
    }
    function renderReference() {
      if (righthand) {
        reference = createObject(zeroVector, identityQuaternion, [0.01, 0.01, 0.01], 0, bgColor, leftHandTransform, true);
      } else {
        reference = createObject(zeroVector, identityQuaternion, [0.01, 0.01, 0.01], 0, bgColor, rightHandTransform, true);
      }
      referenceCollider = getComponent(reference, Collider);
      getTransform(reference).method("set_localPosition").invoke([0.01, -0.117, 0.05]);
      reference.method("set_layer").invoke(2);
      addComponent(reference, Rigidbody).method("set_isKinematic").invoke(true);
    }
    function renderGun(overrideLayerMask = null) {
      gunRenderedLastFrame = true;
      const StartPosition = leftHandTransform.method("get_position").invoke();
      const Direction = leftHandTransform.method("get_forward").invoke();
      const DirectionDivided = Vector3.method("op_Division").invoke(Direction, 4);
      const rayStartPosition = Vector3.method("op_Addition").invoke(StartPosition, DirectionDivided);
      const layerMask = overrideLayerMask || -3180559;
      const hits = Physics.method("RaycastAll", 4).invoke(rayStartPosition, Direction, 512, layerMask);
      let finalDistance = Infinity;
      let finalRay = null;
      for (const hit of hits) {
        const distance = Vector3.method("Distance").invoke(hit.method("get_point").invoke(), StartPosition);
        if (distance < finalDistance) {
          finalRay = hit;
          finalDistance = distance;
        }
      }
      let EndPosition;
      if (gunLocked) {
        EndPosition = getTransform(lockTarget).method("get_position").invoke();
      } else if (finalRay != null && !finalRay.isNull()) {
        EndPosition = finalRay.method("get_point").invoke();
      } else {
        const farDirection = Vector3.method("op_Multiply").invoke(Direction, 512);
        EndPosition = Vector3.method("op_Addition").invoke(StartPosition, farDirection);
      }
      if (Vector3.method("op_Equality").invoke(EndPosition, zeroVector)) {
        const farDirection = Vector3.method("op_Multiply").invoke(Direction, 512);
        EndPosition = Vector3.method("op_Addition").invoke(StartPosition, farDirection);
      }
      if (GunPointer == null) {
        GunPointer = createObject(EndPosition, identityQuaternion, [0.1, 0.1, 0.1], 0, [1, 1, 1, 1]);
      }
      GunPointer.method("SetActive").invoke(true);
      const pointerTransform = getTransform(GunPointer);
      pointerTransform.method("set_position").invoke(EndPosition);
      const PointerRenderer = getComponent(GunPointer, Renderer);
      const material = PointerRenderer.method("get_material").invoke();
      material.method("set_shader").invoke(TextShader);
      const pointerColor = gunLocked || leftTrigger ? buttonPressedColor : gunColor;
      material.method("set_color").invoke(pointerColor);
      const collider = getComponent(GunPointer, Collider);
      if (collider != null) {
        Destroy(collider);
      }
      if (GunLine == null) {
        const lineObj = createObject(zeroVector, identityQuaternion, oneVector, 0, [0, 0, 0, 0]);
        GunLine = addComponent(lineObj, LineRenderer);
      } else {
        GunLine.method("get_gameObject").invoke().method("SetActive").invoke(true);
      }
      const lineMaterial = GunLine.method("get_material").invoke();
      lineMaterial.method("set_shader").invoke(TextShader);
      GunLine.method("set_startColor").invoke(bgColor);
      GunLine.method("set_endColor").invoke(bgColor);
      const lineWidth = 0.025;
      GunLine.method("set_startWidth").invoke(lineWidth);
      GunLine.method("set_endWidth").invoke(lineWidth);
      GunLine.method("set_positionCount").invoke(2);
      GunLine.method("set_useWorldSpace").invoke(true);
      GunLine.method("SetPosition").invoke(0, StartPosition);
      GunLine.method("SetPosition").invoke(1, EndPosition);
      if (leftTrigger || gunLocked) {
        const Step = 10;
        GunLine.method("set_positionCount").invoke(Step);
        GunLine.method("SetPosition").invoke(0, StartPosition);
        for (let i = 1; i < Step - 1; i++) {
          const t = i / (Step - 1);
          const Position = Vector3.method("Lerp").invoke(StartPosition, EndPosition, t);
          const randomValue = Math.random();
          let offset = zeroVector;
          if (randomValue > 0.75) {
            offset = [
              Math.random() * 0.2 - 0.1,
              Math.random() * 0.2 - 0.1,
              Math.random() * 0.2 - 0.1
            ];
          }
          const finalPosition = Vector3.method("op_Addition").invoke(Position, offset);
          GunLine.method("SetPosition").invoke(i, finalPosition);
        }
        GunLine.method("SetPosition").invoke(Step - 1, EndPosition);
      }
      return { ray: finalRay, gunPointer: GunPointer };
    }
    function recenterMenu() {
      const menuTransform = getTransform(menu);
      let targetPos, targetRot;
      if (righthand) {
        targetPos = rightHandTransform.method("get_position").invoke();
        targetRot = rightHandTransform.method("get_rotation").invoke();
        targetRot = Quaternion.method("op_Multiply").invoke(targetRot, Quaternion.method("Euler").invoke(0, 0, 180));
      } else {
        targetPos = leftHandTransform.method("get_position").invoke();
        targetRot = leftHandTransform.method("get_rotation").invoke();
      }
      if (LerpMenu) {
        const menuPos = menuTransform.method("get_position").invoke();
        const distance = Vector3.method("Distance").invoke(menuPos, zeroVector);
        if (distance < 1) {
          menuTransform.method("set_position").invoke(targetPos);
          menuTransform.method("set_rotation").invoke(targetRot);
        } else {
          menuTransform.method("set_position").invoke(Vector3.method("Lerp").invoke(menuPos, targetPos, deltaTime * 15));
          menuTransform.method("set_rotation").invoke(Quaternion.method("Slerp").invoke(menuTransform.method("get_rotation").invoke(), targetRot, deltaTime * 15));
        }
      } else {
        menuTransform.method("set_position").invoke(targetPos);
        menuTransform.method("set_rotation").invoke(targetRot);
      }
    }
    class ButtonInfo {
      buttonText;
      method;
      enableMethod;
      disableMethod;
      isTogglable;
      toolTip;
      enabled;
      constructor(config) {
        this.buttonText = config.buttonText;
        this.method = config.method;
        this.enableMethod = config.enableMethod;
        this.disableMethod = config.disableMethod;
        this.isTogglable = config.isTogglable ?? true;
        this.toolTip = config.toolTip ?? null;
        this.enabled = config.enabled ?? false;
      }
    }
    const buttons = [
      [
        new ButtonInfo({
          buttonText: "Settings",
          method: () => {
            currentCategory = 2;
            currentPage = 0;
          },
          isTogglable: false
        })
      ],
      [
        new ButtonInfo({
          buttonText: "PreviousPage",
          method: () => {
            const lastPage = Math.ceil(buttons[currentCategory].length / buttonsPerPage) - 1;
            currentPage--;
            if (currentPage < 0)
              currentPage = lastPage;
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "NextPage",
          method: () => {
            const lastPage = Math.ceil(buttons[currentCategory].length / buttonsPerPage) - 1;
            currentPage++;
            currentPage %= lastPage + 1;
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "GlobalReturn",
          method: () => {
            currentCategory = 0;
            currentPage = 0;
          },
          isTogglable: false
        })
      ],
      [
        new ButtonInfo({
          buttonText: "Exit Settings",
          method: () => {
            currentCategory = 0;
            currentPage = 0;
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "dump game (fixed 0x86)",
          method: () => {
            dumpIl2CppAll();
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "dump photon views (fixed 0x86)",
          method: () => {
            dumpPhotonPrefabs();
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "Rejoin",
          method: () => {
            rejoinRoom();
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "Disconnect",
          method: () => {
            disconnectRoom();
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "Join random",
          method: () => {
            joinRandomRoom();
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "dump all audios (dev shi)",
          method: () => {
            dumpAllAudioWavs();
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "Dark",
          isTogglable: false,
          method: () => {
            applyThemeId(0);
            reloadMenu();
          }
        }),
        new ButtonInfo({
          buttonText: "Blue",
          isTogglable: false,
          method: () => {
            applyThemeId(1);
            reloadMenu();
          }
        }),
        new ButtonInfo({
          buttonText: "Red",
          isTogglable: false,
          method: () => {
            applyThemeId(2);
            reloadMenu();
          }
        }),
        new ButtonInfo({
          buttonText: "Green",
          isTogglable: false,
          method: () => {
            applyThemeId(3);
            reloadMenu();
          }
        })
      ]
    ];
    let buttonMap = /* @__PURE__ */ new Map();
    buttons.flat().forEach((button) => {
      buttonMap.set(button.buttonText, button);
    });
    function getIndex(buttonText) {
      return buttonMap.get(buttonText);
    }
    function rebuildButtonMap() {
      buttonMap = /* @__PURE__ */ new Map();
      buttons.flat().forEach((button) => {
        if (button)
          buttonMap.set(button.buttonText, button);
      });
    }
    function hideGun() {
      try {
        if (GunPointer != null)
          GunPointer.method("SetActive").invoke(false);
      } catch (e) {
      }
      try {
        const lineObj = GunLine.method("get_gameObject").invoke();
        if (lineObj != null && !lineObj.isNull())
          lineObj.method("SetActive").invoke(false);
      } catch (e) {
      }
    }
    const PhotonView = classOf(PhotonUnityNetworking, "Photon.Pun.PhotonView");
    let cachedLarMenu = null;
    let lastLarMenuFind = 0;
    function getLarMenu() {
      try {
        const now = Date.now();
        if (cachedLarMenu == null || cachedLarMenu.isNull() || now - lastLarMenuFind > 2e3) {
          lastLarMenuFind = now;
          cachedLarMenu = null;
          if (LARMenuClass != null) {
            const arr = findObjectsOfType(LARMenuClass);
            for (let i = 0; i < arr.length; i++) {
              try {
                const inst = arr.get(i);
                if (inst != null && !inst.isNull()) {
                  cachedLarMenu = inst;
                  break;
                }
              } catch (e) {
              }
            }
          }
        }
      } catch (e) {
      }
      return cachedLarMenu;
    }
    let cachedMods = null;
    let lastModsFind = 0;
    function getMods() {
      try {
        const now = Date.now();
        if (cachedMods == null || cachedMods.isNull() || now - lastModsFind > 2e3) {
          lastModsFind = now;
          cachedMods = null;
          if (ModsClass != null) {
            const arr = findObjectsOfType(ModsClass);
            for (let i = 0; i < arr.length; i++) {
              try {
                const inst = arr.get(i);
                if (inst != null && !inst.isNull()) {
                  cachedMods = inst;
                  break;
                }
              } catch (e) {
              }
            }
          }
        }
      } catch (e) {
      }
      return cachedMods;
    }
    let cachedManager = null;
    let lastManagerFind = 0;
    function getVrManager() {
      try {
        const now = Date.now();
        if (cachedManager == null || cachedManager.isNull() || now - lastManagerFind > 2e3) {
          lastManagerFind = now;
          cachedManager = null;
          if (PhotonVRManagerClass != null) {
            try {
              cachedManager = PhotonVRManagerClass.method("get_Manager").invoke();
            } catch (e) {
            }
          }
        }
      } catch (e) {
      }
      return cachedManager;
    }
    const localActorNumber = () => {
      try {
        return PhotonNetwork.method("get_LocalPlayer").invoke().method("get_ActorNumber").invoke();
      } catch (e) {
        return -1;
      }
    };
    function getPlayerList() {
      try {
        const mgr = getVrManager();
        if (mgr == null || mgr.isNull())
          return null;
        const list = mgr.field("players").value;
        if (list == null || list.isNull())
          return null;
        return list;
      } catch (e) {
        return null;
      }
    }
    function getLocalPhotonVRPlayer() {
      try {
        const mgr = getVrManager();
        if (mgr == null || mgr.isNull())
          return null;
        const lp = mgr.field("LocalPlayer").value;
        if (lp != null && !lp.isNull())
          return lp;
      } catch (e) {
      }
      return null;
    }
    function getLocalPVPPlayer() {
      try {
        if (PVPPlayerClass == null)
          return null;
        const arr = findObjectsOfType(PVPPlayerClass);
        for (let i = 0; i < arr.length; i++) {
          try {
            const p = arr.get(i);
            const pv = p.method("get_photonView").invoke();
            if (pv != null && !pv.isNull()) {
              try {
                if (pv.method("get_IsMine").invoke())
                  return p;
              } catch (e) {
              }
            }
          } catch (e) {
          }
        }
        if (arr.length > 0) {
          try {
            return arr.get(0);
          } catch (e) {
          }
        }
      } catch (e) {
      }
      return null;
    }
    function getPvpOf(p) {
      try {
        if (PVPPlayerClass == null)
          return null;
        const go = p.method("get_gameObject").invoke();
        if (go == null || go.isNull())
          return null;
        return go.method("GetComponent", 1).inflate(PVPPlayerClass).invoke();
      } catch (e) {
        return null;
      }
    }
    function pvpRPC(pv, name, target, args) {
      try {
        if (pv == null || pv.isNull())
          return false;
        pv.method("RPC", 3).invoke(Il2Cpp.string(name), target, args);
        return true;
      } catch (e) {
        return false;
      }
    }
    function forEachOtherPlayer(fn) {
      Il2Cpp.perform(() => {
        try {
          const list = getPlayerList();
          if (list == null)
            return;
          const local = getLocalPhotonVRPlayer();
          const count = list.method("get_Count").invoke();
          for (let i = 0; i < count; i++) {
            try {
              const p = list.method("get_Item").invoke(i);
              if (p == null || p.isNull())
                continue;
              let isLocal = false;
              if (local != null && !local.isNull()) {
                try {
                  if (local.handle.equals(p.handle))
                    isLocal = true;
                } catch (e) {
                }
              }
              fn(p, isLocal);
            } catch (e) {
            }
          }
        } catch (e) {
        }
      });
    }
    let lastKickAllTime = 0;
    function kickAllPlayers() {
      const now = Date.now();
      if (now - lastKickAllTime < 1e4) {
        sendNotification("Kick all on cooldown (10s)", false, 2);
        return;
      }
      lastKickAllTime = now;
      console.log("[net] kickAll fired at " + (/* @__PURE__ */ new Date()).toLocaleTimeString());
      forEachOtherPlayer((p) => {
        try {
          const pv = p.method("get_photonView").invoke();
          if (pv == null || pv.isNull())
            return;
          pvpRPC(pv, "KickPlayer", 1, []);
          try {
            const owner = pv.method("get_Owner").invoke();
            if (owner != null && !owner.isNull()) {
              pv.method("RPC", 3).overload("System.String", "Photon.Realtime.Player", "System.Object[]").invoke(Il2Cpp.string("KickPlayer"), owner, []);
            }
          } catch (e) {
          }
          try {
            pvpRPC(pv, "KickPlayer", 2, []);
          } catch (e) {
          }
        } catch (e) {
        }
      });
      sendAllOutgoing();
      sendNotification("Kicking everyone...", false, 2);
    }
    function teleportAllPlayers() {
      console.log("[net] teleportAll at " + (/* @__PURE__ */ new Date()).toLocaleTimeString());
      Il2Cpp.perform(() => {
        try {
          let pos = null;
          try {
            pos = rightHandTransform.method("get_position").invoke();
          } catch (e) {
          }
          if (pos == null) {
            try {
              pos = GTPlayer.method("get_PlayerRigidBody").invoke().method("get_position").invoke();
            } catch (e) {
            }
          }
          if (pos == null)
            return;
          const x = pos.field("x").value;
          const y = pos.field("y").value;
          const z = pos.field("z").value;
          let tp = null;
          try {
            tp = Vector3.method(".ctor").invoke(x, y, z);
          } catch (e) {
          }
          if (tp == null) {
            try {
              tp = vec3(x, y, z);
            } catch (e) {
            }
          }
          forEachOtherPlayer((p) => {
            try {
              const pv = p.method("get_photonView").invoke();
              pvpRPC(pv, "RPC_Teleport", 1, [tp]);
            } catch (e) {
            }
          });
          sendAllOutgoing();
          sendNotification("Teleported everyone to you", false, 2);
        } catch (e) {
        }
      });
    }
    function flingAllPlayers() {
      Il2Cpp.perform(() => {
        try {
          let myPos = null;
          try {
            myPos = GTPlayer.method("get_PlayerRigidBody").invoke().method("get_position").invoke();
          } catch (e) {
          }
          if (myPos == null) {
            try {
              myPos = rightHandTransform.method("get_position").invoke();
            } catch (e) {
            }
          }
          if (myPos == null)
            return;
          const mx = myPos.field("x").value, my = myPos.field("y").value, mz = myPos.field("z").value;
          const up = Vector3.field("upVector").value;
          forEachOtherPlayer((p) => {
            try {
              const head = p.field("Head").value;
              const tp = head.method("get_position").invoke();
              const dx = tp.field("x").value - mx;
              const dy = tp.field("y").value - my;
              const dz = tp.field("z").value - mz;
              let len = Math.sqrt(dx * dx + dy * dy + dz * dz);
              if (len < 1e-3)
                len = 1;
              let dir = null;
              try {
                dir = Vector3.method(".ctor").invoke(dx / len, dy / len + 0.6, dz / len);
              } catch (e) {
              }
              if (dir == null) {
                try {
                  dir = vec3(dx / len, dy / len + 0.6, dz / len);
                } catch (e) {
                }
              }
              const pv = p.method("get_photonView").invoke();
              pvpRPC(pv, "RPC_ThrowPlayer", 1, [dir]);
            } catch (e) {
            }
          });
          sendAllOutgoing();
          sendNotification("Flinged everyone", false, 2);
        } catch (e) {
        }
      });
    }
    function killAllPlayers() {
      forEachOtherPlayer((p) => {
        try {
          const pvp = getPvpOf(p);
          if (pvp != null && !pvp.isNull()) {
            try {
              pvp.method("RPC_DamagePlayer").invoke(100);
            } catch (e) {
            }
          }
        } catch (e) {
        }
      });
      sendAllOutgoing();
      sendNotification("Killed everyone", false, 2);
    }
    function healAllPlayers() {
      forEachOtherPlayer((p) => {
        try {
          const pvp = getPvpOf(p);
          if (pvp != null && !pvp.isNull()) {
            try {
              pvp.method("RPC_HealPlayer").invoke(100);
            } catch (e) {
            }
          }
        } catch (e) {
        }
      });
      sendAllOutgoing();
      sendNotification("Healed everyone", false, 2);
    }
    function breakLimbsAll() {
      forEachOtherPlayer((p) => {
        try {
          const pv = p.method("get_photonView").invoke();
          pvpRPC(pv, "RPC_BreakLimb", 1, [1]);
        } catch (e) {
        }
      });
      sendAllOutgoing();
      sendNotification("Broke everyone's limbs", false, 2);
    }
    function restoreLimbsAll() {
      forEachOtherPlayer((p) => {
        try {
          const pv = p.method("get_photonView").invoke();
          pvpRPC(pv, "RPC_RestoreLimbs", 1, []);
        } catch (e) {
        }
      });
      sendAllOutgoing();
      sendNotification("Restored everyone's limbs", false, 2);
    }
    function muteAll(mute) {
      forEachOtherPlayer((p) => {
        try {
          p.method("set_IsMuted").invoke(mute);
        } catch (e) {
        }
      });
      sendNotification(mute ? "Muted everyone" : "Unmuted everyone", false, 2);
    }
    function nametagAll(hide) {
      forEachOtherPlayer((p) => {
        try {
          p.method("set_DisableNametag").invoke(hide);
        } catch (e) {
        }
      });
      sendNotification(hide ? "Nametags hidden" : "Nametags shown", false, 2);
    }
    function grabAll(grab) {
      Il2Cpp.perform(() => {
        try {
          const la = localActorNumber();
          forEachOtherPlayer((p) => {
            try {
              const pv = p.method("get_photonView").invoke();
              if (grab)
                pvpRPC(pv, "RPC_GrabPlayer", 1, [la, false]);
              else
                pvpRPC(pv, "RPC_ReleasePlayer", 1, []);
            } catch (e) {
            }
          });
          sendAllOutgoing();
          sendNotification(grab ? "Grabbed everyone" : "Released everyone", false, 2);
        } catch (e) {
        }
      });
    }
    let godModeEnabled = false;
    function setGodMode(on) {
      godModeEnabled = on;
      sendNotification(on ? "GodMode ON (damage blocked)" : "GodMode OFF", false, 2);
    }
    function modsToggle(methodName, fieldName, on) {
      Il2Cpp.perform(() => {
        try {
          const m = getMods();
          if (m == null || m.isNull()) {
            sendNotification("Mods instance not found", false, 2);
            return;
          }
          const want = on;
          if (fieldName != null) {
            try {
              const cur = m.field(fieldName).value;
              if (cur !== want)
                m.method(methodName).invoke();
            } catch (e) {
              try {
                m.method(methodName).invoke();
              } catch (e2) {
              }
            }
          } else {
            try {
              m.method(methodName).invoke();
            } catch (e) {
            }
          }
        } catch (e) {
        }
      });
    }
    function modsDisableAll() {
      Il2Cpp.perform(() => {
        try {
          const m = getMods();
          if (m == null || m.isNull())
            return;
          m.method("DisableAllMods").invoke();
          sendNotification("All mods disabled", false, 2);
        } catch (e) {
        }
      });
    }
    function modsSize(positive) {
      Il2Cpp.perform(() => {
        try {
          const m = getMods();
          if (m == null || m.isNull()) {
            sendNotification("Mods instance not found", false, 2);
            return;
          }
          m.method("IncreaseSize").invoke(positive);
        } catch (e) {
        }
      });
    }
    function setLarFloat(fieldName, value, handler) {
      Il2Cpp.perform(() => {
        try {
          const l = getLarMenu();
          if (l == null || l.isNull()) {
            sendNotification("LARMenu not found", false, 2);
            return;
          }
          l.field(fieldName).value = value;
          if (handler != null) {
            try {
              l.method(handler).invoke();
            } catch (e) {
            }
          }
        } catch (e) {
        }
      });
    }
    let espOn = false;
    let spamSpawnOn = false;
    let agFunnelOn = false;
    let invisibleOn = false;
    let prioritySpeakerOn = false;
    let autoLoudnessOn = false;
    let lastEspApply = 0;
    let lastFunnelApply = 0;
    let spamSpawnMethod = null;
    let agFunnelMethod = null;
    let espMethod = null;
    function setLarFlag(flagName, on) {
      Il2Cpp.perform(() => {
        try {
          const l = getLarMenu();
          if (l == null || l.isNull()) {
            sendNotification("LARMenu not found", false, 2);
            return;
          }
          let fieldName = "_boxEsp";
          let handler = "Handle_Visuals";
          if (flagName === "spamSpawn") {
            fieldName = "_spamSpawning";
            handler = "Handle_SpamSpawn";
          } else if (flagName === "agFunnel") {
            fieldName = "_agFunnel";
            handler = "Handle_AgFunnel";
          } else if (flagName === "invisible") {
            fieldName = "_useInvisible";
            handler = "Handle_Local";
          } else if (flagName === "prioritySpeaker") {
            fieldName = "_isPrioritySpeaker";
            handler = "Handle_Local";
          } else if (flagName === "autoLoudness") {
            fieldName = "_autoLoudness";
            handler = "Handle_Local";
          }
          try {
            l.field(fieldName).value = on;
          } catch (e) {
          }
          try {
            l.method(handler).invoke();
          } catch (e) {
          }
        } catch (e) {
        }
      });
    }
    function healSelf() {
      Il2Cpp.perform(() => {
        try {
          const pvp = getLocalPVPPlayer();
          if (pvp == null) {
            sendNotification("No PVPPlayer found", false, 2);
            return;
          }
          try {
            pvp.method("Heal").invoke(100);
          } catch (e) {
          }
          try {
            pvp.method("set_CurrentHealth").invoke(100);
          } catch (e) {
          }
          sendNotification("Healed!", false, 2);
        } catch (e) {
        }
      });
    }
    function maxCredits() {
      Il2Cpp.perform(() => {
        try {
          const amt = 999999999;
          let done = false;
          if (ScrapSystemClass != null) {
            const systems = findObjectsOfType(ScrapSystemClass);
            for (let i = 0; i < systems.length; i++) {
              try {
                const s = systems.get(i);
                try {
                  s.field("_totalCredits").value = amt;
                } catch (e) {
                }
                done = true;
              } catch (e) {
              }
            }
          }
          if (PlayerPrefsClass != null) {
            try {
              PlayerPrefsClass.method("SetInt").invoke(Il2Cpp.string("TOTAL_CREDITS"), amt);
            } catch (e) {
            }
            try {
              PlayerPrefsClass.method("Save").invoke();
            } catch (e) {
            }
          }
          try {
            if (PlayFabManagerClass != null) {
              const pfm = PlayFabManagerClass.method("get_Instance").invoke();
              if (pfm != null && !pfm.isNull())
                pfm.method("UpdateCurrencyBoard").invoke(amt);
            }
          } catch (e) {
          }
          sendNotification(done ? "Credits maxed!" : "No scrap system (prefs still set)", false, 2);
        } catch (e) {
        }
      });
    }
    function giveEveryoneCredits() {
      Il2Cpp.perform(() => {
        try {
          if (ScrapSystemClass == null)
            return;
          const systems = findObjectsOfType(ScrapSystemClass);
          for (let i = 0; i < systems.length; i++) {
            try {
              const s = systems.get(i);
              const pv = s.method("get_photonView").invoke();
              if (pv != null && !pv.isNull())
                pv.method("RPC", 3).invoke(Il2Cpp.string("RPC_DistributeCredits"), 1, [999999]);
            } catch (e) {
            }
          }
          sendAllOutgoing();
          sendNotification("Distributed credits to everyone", false, 2);
        } catch (e) {
        }
      });
    }
    function setAdminGunExplosive(on) {
      Il2Cpp.perform(() => {
        try {
          if (AdminGunClass == null)
            return;
          const guns = findObjectsOfType(AdminGunClass);
          for (let i = 0; i < guns.length; i++) {
            try {
              guns.get(i).field("useExplosiveRounds").value = on;
            } catch (e) {
            }
          }
          sendNotification(on ? "Explosive rounds ON" : "Explosive rounds OFF", false, 2);
        } catch (e) {
        }
      });
    }
    let foundDoors = {};
    function findDoorObject(fieldName) {
      const needle = fieldName.toLowerCase().replace("door", "").trim();
      let door = null;
      try {
        const pfm = PlayFabManagerClass.method("get_Instance").invoke();
        if (pfm != null && !pfm.isNull()) {
          const d = pfm.field(fieldName).value;
          if (d != null && !d.isNull())
            door = d;
        }
      } catch (e) {
        console.log("[doorDebug] field lookup error: " + e);
      }
      if (door != null && !door.isNull())
        return door;
      let scanned = 0;
      let fallback = null;
      const matches = [];
      try {
        const all = Object.method("FindObjectsOfType").overload("System.Type", "System.Boolean").invoke(GameObject.type.object, true);
        if (all != null) {
          for (let i = 0; i < all.length; i++) {
            try {
              const g = all.get(i);
              if (g == null || g.isNull())
                continue;
              scanned++;
              const n = g.method("get_name").invoke().toString().toLowerCase();
              let pn = "";
              try {
                const t = g.method("get_transform").invoke();
                const parent = t.method("get_parent").invoke();
                if (parent != null && !parent.isNull())
                  pn = parent.method("get_name").invoke().toString().toLowerCase();
              } catch (e2) {
              }
              if (n.indexOf(needle) === -1 && pn.indexOf(needle) === -1)
                continue;
              matches.push(n);
              const isBoundary = n.indexOf("door") !== -1 || n.indexOf("gate") !== -1 || n.indexOf("barrier") !== -1 || pn.indexOf("door") !== -1 || pn.indexOf("gate") !== -1 || pn.indexOf("barrier") !== -1;
              let hasCol = false;
              try {
                hasCol = g.method("GetComponent").overload("System.Type").invoke(Collider.type.object) != null;
              } catch (e2) {
              }
              if (isBoundary || hasCol) {
                door = g;
                break;
              }
              if (fallback == null)
                fallback = g;
            } catch (e2) {
            }
          }
        }
      } catch (e) {
        console.log("[doorDebug] scan error: " + e);
      }
      console.log("[doorDebug] scanned " + scanned + " objects for '" + needle + "'; matches: " + matches.join(", "));
      if (door == null)
        door = fallback;
      return door;
    }
    function dumpDoorScene() {
      const doors = [];
      const staffish = [];
      let scanned = 0;
      try {
        const all = Object.method("FindObjectsOfType").overload("System.Type", "System.Boolean").invoke(GameObject.type.object, true);
        if (all != null) {
          for (let i = 0; i < all.length; i++) {
            try {
              const g = all.get(i);
              if (g == null || g.isNull())
                continue;
              scanned++;
              const n = g.method("get_name").invoke().toString().toLowerCase();
              let pn = "";
              try {
                const t = g.method("get_transform").invoke();
                const parent = t.method("get_parent").invoke();
                if (parent != null && !parent.isNull())
                  pn = parent.method("get_name").invoke().toString().toLowerCase();
              } catch (e2) {
              }
              if (n.indexOf("door") !== -1 || n.indexOf("gate") !== -1 || n.indexOf("barrier") !== -1 || pn.indexOf("door") !== -1 || pn.indexOf("gate") !== -1 || pn.indexOf("barrier") !== -1) {
                let active = "?";
                try {
                  active = g.method("get_activeSelf").invoke() ? "active" : "inactive";
                } catch (e2) {
                }
                doors.push(n + " [" + active + "]");
              }
              if (n.indexOf("staff") !== -1 || pn.indexOf("staff") !== -1) {
                let active = "?";
                try {
                  active = g.method("get_activeSelf").invoke() ? "active" : "inactive";
                } catch (e2) {
                }
                staffish.push(n + " [" + active + "]");
              }
            } catch (e2) {
            }
          }
        }
      } catch (e) {
        console.log("[doorDebug] dump error: " + e);
      }
      console.log("[doorDebug] scanned " + scanned + " objects; doors/gates/barriers: " + doors.join(", "));
      console.log("[doorDebug] objects with 'staff': " + staffish.join(", "));
      try {
        const pfm = PlayFabManagerClass.method("get_Instance").invoke();
        if (pfm != null && !pfm.isNull()) {
          const s = pfm.field("staffDoor").value != null ? "set" : "null";
          const v = pfm.field("vipDoor").value != null ? "set" : "null";
          const u = pfm.field("superMenuUpgrade").value != null ? "set" : "null";
          console.log("[doorDebug] PlayFabManager: staffDoor=" + s + " vipDoor=" + v + " superMenuUpgrade=" + u);
          const tags = pfm.field("purchaseTags").value;
          const names = [];
          if (tags != null && !tags.isNull()) {
            for (let ti = 0; ti < tags.length; ti++) {
              try {
                const tag = tags.get(ti);
                if (tag != null && !tag.isNull()) {
                  try {
                    names.push(tag.method("get_ItemId").invoke().toString());
                  } catch (e2) {
                  }
                }
              } catch (e2) {
              }
            }
          }
          console.log("[doorDebug] purchase tag itemIds: " + names.join(", "));
        } else {
          console.log("[doorDebug] PlayFabManager Instance NULL");
        }
      } catch (e2) {
        console.log("[doorDebug] pfm dump error: " + e2);
      }
    }
    function openDoorButton(fieldName, label) {
      Il2Cpp.perform(() => {
        try {
          let door = null;
          if (foundDoors[fieldName] != null) {
            try {
              if (!foundDoors[fieldName].isNull())
                door = foundDoors[fieldName];
              else
                foundDoors[fieldName] = null;
            } catch (e) {
              foundDoors[fieldName] = null;
            }
          }
          if (door == null)
            door = findDoorObject(fieldName);
          if (door == null || door.isNull()) {
            dumpDoorScene();
            return;
          }
          foundDoors[fieldName] = door;
          door.method("SetActive").invoke(false);
          sendNotification(label + " door opened", false, 2);
        } catch (e) {
          console.log("[doorDebug] " + label + " button error: " + e);
        }
      });
    }
    function adminGunDamage(delta) {
      Il2Cpp.perform(() => {
        try {
          if (AdminGunClass == null)
            return;
          const guns = findObjectsOfType(AdminGunClass);
          for (let i = 0; i < guns.length; i++) {
            try {
              const g = guns.get(i);
              const cur = g.field("damage").value;
              g.field("damage").value = Math.max(1, cur + delta);
            } catch (e) {
            }
          }
        } catch (e) {
        }
      });
    }
    function soundboardSpam() {
      console.log("[net] soundboard at " + (/* @__PURE__ */ new Date()).toLocaleTimeString());
      Il2Cpp.perform(() => {
        try {
          const l = getLarMenu();
          if (l == null || l.isNull()) {
            sendNotification("LARMenu not found", false, 2);
            return;
          }
          const clips = l.field("soundboardClips").value;
          const n = clips == null || clips.isNull() ? 0 : clips.length;
          if (n === 0) {
            sendNotification("No soundboard clips loaded", false, 2);
            return;
          }
          const idx = Math.floor(Math.random() * n);
          const pv = l.method("get_photonView").invoke();
          if (pv != null && !pv.isNull())
            pv.method("RPC", 3).invoke(Il2Cpp.string("RPC_PlaySoundboard"), 1, [idx]);
          sendAllOutgoing();
          sendNotification("Playing soundboard clip " + idx, false, 1);
        } catch (e) {
        }
      });
    }
    function hsvToRgb(h, s, v) {
      const i = Math.floor(h / 60) % 6;
      const f = h / 60 - Math.floor(h / 60);
      const p = v * (1 - s);
      const q = v * (1 - f * s);
      const t = v * (1 - (1 - f) * s);
      let r = 0, g = 0, b = 0;
      if (i === 0) {
        r = v;
        g = t;
        b = p;
      } else if (i === 1) {
        r = q;
        g = v;
        b = p;
      } else if (i === 2) {
        r = p;
        g = v;
        b = t;
      } else if (i === 3) {
        r = p;
        g = q;
        b = v;
      } else if (i === 4) {
        r = t;
        g = p;
        b = v;
      } else {
        r = v;
        g = p;
        b = q;
      }
      return [r, g, b, 1];
    }
    function setLocalColor(c) {
      Il2Cpp.perform(() => {
        try {
          if (PhotonVRManagerClass != null) {
            try {
              PhotonVRManagerClass.method("SetColour").invoke(c);
            } catch (e) {
            }
          }
          const l = getLarMenu();
          if (l != null && !l.isNull()) {
            try {
              const c3 = Vector3.method(".ctor").invoke(c[0], c[1], c[2]);
              l.field("_localPlayerColor").value = c3;
            } catch (e) {
            }
            try {
              l.method("Handle_Local").invoke();
            } catch (e) {
            }
          }
        } catch (e) {
        }
      });
    }
    let wasFlyB = false;
    let flyHoverOn = false;
    let flyAOn = false;
    let rtFlyOn = false;
    let previousNoclipKey = false;
    let leftPlatform = null;
    let rightPlatform = null;
    function toggleColliders(enabled) {
      const meshColliders = findObjectsOfType(MeshCollider);
      for (let i = 0; i < meshColliders.length; i++) {
        try {
          const meshCollider = meshColliders.get(i);
          meshCollider.method("set_enabled").invoke(enabled);
        } catch (e) {
        }
      }
    }
    function rtFlyPostUpdate() {
      if (!rtFlyOn)
        return;
      try {
        if (GTPlayer == null || GTPlayer.isNull())
          return;
        const rb = GTPlayer.method("get_PlayerRigidBody").invoke();
        if (rb == null || rb.isNull())
          return;
        try {
          rb.method("set_useGravity").invoke(false);
        } catch (e) {
        }
        if (rightTrigger) {
          const forward = leftHandTransform.method("get_forward").invoke();
          const force = Vector3.method("op_Multiply", 2).invoke(forward, 20);
          rb.method("set_linearVelocity").invoke(force);
        } else {
          const up = Vector3.method(".ctor", 3).invoke(0, 9.81 * deltaTime, 0);
          rb.method("set_linearVelocity").invoke(up);
        }
      } catch (e) {
      }
    }
    function flyAPostUpdate() {
      if (!flyAOn)
        return;
      try {
        if (GTPlayer == null || GTPlayer.isNull())
          return;
        const rb = GTPlayer.method("get_PlayerRigidBody").invoke();
        if (rb == null || rb.isNull())
          return;
        try {
          rb.method("set_useGravity").invoke(false);
        } catch (e) {
        }
        if (leftPrimary) {
          const forward = getTransform(leftHandTransform).method("get_forward").invoke();
          const force = Vector3.method("op_Multiply", 2).invoke(forward, 20);
          rb.method("set_linearVelocity").invoke(force);
        } else {
          const up = Vector3.method(".ctor", 3).invoke(0, 9.81 * deltaTime, 0);
          rb.method("set_linearVelocity").invoke(up);
        }
      } catch (e) {
      }
    }
    let flyOriginalGravity = null;
    let flyAnchorY = null;
    function flyPostUpdate() {
      if (!flyHoverOn)
        return;
      try {
        if (GTPlayer == null || GTPlayer.isNull())
          return;
        let rb = null;
        try {
          rb = GTPlayer.method("get_PlayerRigidBody").invoke();
        } catch (e) {
        }
        if (rb != null && !rb.isNull()) {
          try {
            rb.method("set_useGravity").invoke(false);
          } catch (e) {
          }
          try {
            rb.method("set_linearVelocity").invoke(zeroVector);
          } catch (e) {
          }
        }
        try {
          const transform = getTransform(GTPlayer);
          const pos = transform.method("get_position").invoke();
          const y = pos.field("y").value;
          if (flyAnchorY === null) {
            flyAnchorY = y;
            return;
          }
          if (Math.abs(y - flyAnchorY) > 0.01) {
            const v3 = Vector3.method(".ctor", 3).invoke(pos.field("x").value, flyAnchorY, pos.field("z").value);
            transform.method("set_position").invoke(v3);
          }
        } catch (e) {
        }
      } catch (e) {
      }
    }
    let lastGameObjectRefresh = 0;
    function refreshGameObjects() {
      try {
        const livePlayer = PlayerClass.method("get_Instance").invoke();
        if (livePlayer == null || livePlayer.isNull())
          return false;
        GTPlayer = livePlayer;
        try {
          leftHandTransform = GTPlayer.field("leftHandTransform").value;
          rightHandTransform = GTPlayer.field("rightHandTransform").value;
          headCollider = GTPlayer.field("headCollider").value;
          bodyCollider = GTPlayer.field("bodyCollider").value;
        } catch (e) {
        }
        try {
          playerRigidBody = GTPlayer.method("get_PlayerRigidBody").invoke();
        } catch (e) {
        }
        return true;
      } catch (e) {
        if (!String(e).includes("abort") && !String(e).includes("access violation")) {
          console.log(`[Menu] Refresh error: ${e}`);
        }
      }
      return false;
    }
    let normalLongArmsOn = false;
    const LA_SCALE = 1.25;
    let capSceneScale = 0;
    let capHeadScale = null;
    let capHeadPos = null;
    let capBodyScale = null;
    let capBodyPos = null;
    let capTrackScale = null;
    let capTrackPos = null;
    function captureLongArmsOrig(player) {
      try {
        capSceneScale = (() => {
          try {
            return getTransform(player).method("get_localScale").invoke().field("x").value;
          } catch (e) {
            return 1;
          }
        })();
        const hc = player.field("headCollider").value;
        if (hc != null && !hc.isNull()) {
          capHeadScale = getTransform(hc).method("get_localScale").invoke();
          capHeadPos = getTransform(hc).method("get_localPosition").invoke();
        } else {
          capHeadScale = null;
          capHeadPos = null;
        }
        const bc = player.field("bodyCollider").value;
        if (bc != null && !bc.isNull()) {
          capBodyScale = getTransform(bc).method("get_localScale").invoke();
          capBodyPos = getTransform(bc).method("get_localPosition").invoke();
        } else {
          capBodyScale = null;
          capBodyPos = null;
        }
        const ts = player.field("trackingSpace").value;
        if (ts != null && !ts.isNull()) {
          capTrackScale = getTransform(ts).method("get_localScale").invoke();
          capTrackPos = getTransform(ts).method("get_localPosition").invoke();
        } else {
          capTrackScale = null;
          capTrackPos = null;
        }
      } catch (e) {
      }
    }
    function hsl2Rgb(h, s, l) {
      s /= 100;
      l /= 100;
      const k = (n) => (n + h / 30) % 12;
      const a = s * Math.min(l, 1 - l);
      const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
      return [
        Math.round(255 * f(0)),
        Math.round(255 * f(8)),
        Math.round(255 * f(4))
      ];
    }
    function getSmoothColor() {
      hue = (hue + 0.5) % 360;
      const [r, g, b] = hsl2Rgb(hue, 100, 50);
      return { r: r / 255, g: g / 255, b: b / 255, a: 1 };
    }
    function longArmsPostUpdate() {
      if (!normalLongArmsOn)
        return;
      try {
        const player = PlayerClass.method("get_Instance").invoke();
        if (player == null || player.isNull())
          return;
        if (longArmsOriginalLength === null) {
          try {
            longArmsOriginalLength = player.field("maxArmLength").value;
          } catch (e) {
          }
        }
        try {
          player.field("maxArmLength").value = 100;
        } catch (e) {
        }
        const pt = getTransform(player);
        if (pt == null || pt.isNull())
          return;
        if (capSceneScale === 0) {
          captureLongArmsOrig(player);
        }
        const inv = 1 / LA_SCALE;
        try {
          pt.method("set_localScale").invoke([LA_SCALE, LA_SCALE, LA_SCALE]);
        } catch (e) {
        }
        try {
          const hc = player.field("headCollider").value;
          if (hc != null && !hc.isNull() && capHeadScale != null) {
            const hct = getTransform(hc);
            hct.method("set_localScale").invoke([capHeadScale.field("x").value * inv, capHeadScale.field("y").value * inv, capHeadScale.field("z").value * inv]);
            hct.method("set_localPosition").invoke([capHeadPos.field("x").value * inv, capHeadPos.field("y").value * inv, capHeadPos.field("z").value * inv]);
          }
        } catch (e) {
        }
        try {
          const bc = player.field("bodyCollider").value;
          if (bc != null && !bc.isNull() && capBodyScale != null) {
            const bct = getTransform(bc);
            bct.method("set_localScale").invoke([capBodyScale.field("x").value * inv, capBodyScale.field("y").value * inv, capBodyScale.field("z").value * inv]);
            bct.method("set_localPosition").invoke([capBodyPos.field("x").value * inv, capBodyPos.field("y").value * inv, capBodyPos.field("z").value * inv]);
          }
        } catch (e) {
        }
        try {
          const ts = player.field("trackingSpace").value;
          if (ts != null && !ts.isNull() && capTrackScale != null) {
            const tst = getTransform(ts);
            tst.method("set_localScale").invoke([capTrackScale.field("x").value * inv, capTrackScale.field("y").value * inv, capTrackScale.field("z").value * inv]);
            tst.method("set_localPosition").invoke([capTrackPos.field("x").value * inv, capTrackPos.field("y").value * inv, capTrackPos.field("z").value * inv]);
          }
        } catch (e) {
        }
      } catch (e) {
      }
    }
    function restoreFlyGravity() {
      try {
        if (GTPlayer != null) {
          const rb = GTPlayer.method("get_PlayerRigidBody").invoke();
          if (rb != null && !rb.isNull()) {
            if (flyOriginalGravity === null) {
              try {
                flyOriginalGravity = !!rb.method("get_useGravity").invoke();
              } catch (e) {
              }
            }
            try {
              rb.method("set_useGravity").invoke(flyOriginalGravity !== null ? flyOriginalGravity : true);
            } catch (e) {
            }
          }
        }
      } catch (e) {
      }
    }
    function flyB() {
      try {
        let rb = null;
        try {
          if (GTPlayer != null)
            rb = GTPlayer.method("get_PlayerRigidBody").invoke();
        } catch (e) {
        }
        if (rightSecondary) {
          try {
            if (GTPlayer != null) {
              try {
                GTPlayer.field("disableLocomotion").value = true;
              } catch (e) {
              }
              try {
                GTPlayer.field("disableMovement").value = true;
              } catch (e) {
              }
            }
          } catch (e) {
          }
          try {
            const transform = getTransform(GTPlayer);
            let forward = getTransform(rightHandTransform).method("get_forward").invoke();
            let position = transform.method("get_position").invoke();
            forward = Vector3.method("op_Multiply", 2).invoke(forward, flySpeed * 0.25 * deltaTime);
            position = Vector3.method("op_Addition", 2).invoke(position, forward);
            if (rb != null && !rb.isNull()) {
              try {
                rb.method("set_linearVelocity").invoke(zeroVector);
              } catch (e) {
              }
              try {
                rb.method("MovePosition").invoke(position);
              } catch (e) {
              }
            }
            transform.method("set_position").invoke(position);
            if (flyHoverOn && flyAnchorY !== null) {
              try {
                flyAnchorY = position.field("y").value;
              } catch (e) {
              }
            }
          } catch (e) {
          }
          wasFlyB = true;
        } else if (wasFlyB) {
          wasFlyB = false;
          try {
            if (GTPlayer != null) {
              try {
                GTPlayer.field("disableLocomotion").value = false;
              } catch (e) {
              }
              try {
                GTPlayer.field("disableMovement").value = false;
              } catch (e) {
              }
            }
          } catch (e) {
          }
        }
        if (flyHoverOn && rb != null && !rb.isNull()) {
          if (flyOriginalGravity === null) {
            try {
              flyOriginalGravity = !!rb.method("get_useGravity").invoke();
            } catch (e) {
            }
          }
          try {
            rb.method("set_useGravity").invoke(false);
          } catch (e) {
          }
          try {
            rb.method("set_linearVelocity").invoke(zeroVector);
          } catch (e) {
          }
        }
      } catch (e) {
      }
    }
    function toggleGravityLar() {
      Il2Cpp.perform(() => {
        try {
          const p = PlayerClass.method("get_Instance").invoke();
          if (p == null || p.isNull()) {
            sendNotification("Player not found", false, 2);
            return;
          }
          const cur = p.field("useCustomGravity").value;
          p.field("useCustomGravity").value = !cur;
          p.method("set_CurrentGravity").invoke(cur ? -9.81 : 0);
          sendNotification(cur ? "Gravity restored" : "Gravity OFF", false, 2);
        } catch (e) {
        }
      });
    }
    function toggleNoclipLar() {
      Il2Cpp.perform(() => {
        try {
          const p = PlayerClass.method("get_Instance").invoke();
          if (p == null || p.isNull()) {
            sendNotification("Player not found", false, 2);
            return;
          }
          const cur = p.field("disableLocomotion").value;
          p.field("disableLocomotion").value = !cur;
          p.field("disableMovement").value = !cur;
          try {
            const hc = p.field("headCollider").value;
            if (hc != null && !hc.isNull())
              hc.method("set_enabled").invoke(cur);
          } catch (e) {
          }
          try {
            const bc = p.field("bodyCollider").value;
            if (bc != null && !bc.isNull())
              bc.method("set_enabled").invoke(cur);
          } catch (e) {
          }
          sendNotification(cur ? "Noclip OFF" : "Noclip ON", false, 2);
        } catch (e) {
        }
      });
    }
    function setPlayerSizeLar(size) {
      Il2Cpp.perform(() => {
        try {
          const p = PlayerClass.method("get_Instance").invoke();
          if (p == null || p.isNull())
            return;
          p.method("SetPlayerSize").invoke(size, true);
          sendNotification("Size: " + size.toFixed(2), false, 2);
        } catch (e) {
        }
      });
    }
    function spawnSelectedNow() {
      Il2Cpp.perform(() => {
        try {
          const l = getLarMenu();
          if (l == null || l.isNull()) {
            sendNotification("LARMenu not found", false, 2);
            return;
          }
          l.method("SpawnSelectedPrefab").invoke();
          sendAllOutgoing();
        } catch (e) {
        }
      });
    }
    function cycleSpawnerIndex(delta) {
      Il2Cpp.perform(() => {
        try {
          const l = getLarMenu();
          if (l == null || l.isNull())
            return;
          let idx = 0;
          try {
            idx = l.field("_selectedPrefabIndex").value;
          } catch (e) {
          }
          let max = 0;
          try {
            const names = l.field("_spawnerPrefabNames").value;
            if (names != null && !names.isNull())
              max = names.length;
          } catch (e) {
          }
          if (max > 0)
            idx = (idx + delta + max) % max;
          l.field("_selectedPrefabIndex").value = idx;
          try {
            const names = l.field("_spawnerPrefabNames").value;
            if (names != null && !names.isNull() && idx >= 0 && idx < names.length) {
              const nm = names.get(idx);
              if (nm != null && !nm.isNull())
                sendNotification("Selected: " + nm.toString(), false, 2);
            }
          } catch (e) {
          }
        } catch (e) {
        }
      });
    }
    function showSelectedPrefab() {
      Il2Cpp.perform(() => {
        try {
          const l = getLarMenu();
          if (l == null || l.isNull())
            return;
          let idx = 0;
          try {
            idx = l.field("_selectedPrefabIndex").value;
          } catch (e) {
          }
          let name = "?";
          try {
            const names = l.field("_spawnerPrefabNames").value;
            if (names != null && !names.isNull() && idx >= 0 && idx < names.length) {
              const nm = names.get(idx);
              if (nm != null && !nm.isNull())
                name = nm.toString();
            }
          } catch (e) {
          }
          sendNotification("Selected: " + name, false, 2);
        } catch (e) {
        }
      });
    }
    function cleanUpSpawns() {
      Il2Cpp.perform(() => {
        try {
          const l = getLarMenu();
          if (l == null || l.isNull())
            return;
          l.method("CleanUpMySpawns").invoke();
          sendNotification("Spawns cleaned", false, 2);
        } catch (e) {
        }
      });
    }
    const pendingFling = [];
    function applyFlingTo(obj, dir) {
      try {
        if (obj == null || obj.isNull())
          return;
        let rb = null;
        try {
          rb = obj.method("GetComponentInChildren", 1).inflate(Rigidbody).invoke();
        } catch (e) {
        }
        if (rb == null || rb.isNull()) {
          try {
            rb = obj.method("GetComponent", 1).inflate(Rigidbody).invoke();
          } catch (e) {
          }
        }
        if (rb == null || rb.isNull()) {
          try {
            rb = addComponent(obj, Rigidbody);
          } catch (e) {
          }
        }
        if (rb == null || rb.isNull())
          return;
        try {
          rb.method("set_isKinematic").invoke(false);
        } catch (e) {
        }
        try {
          rb.method("set_useGravity").invoke(false);
        } catch (e) {
        }
        try {
          rb.method("set_collisionDetectionMode").invoke(1);
        } catch (e) {
        }
        try {
          rb.method("set_linearVelocity").invoke(Vector3.method("op_Multiply", 2).invoke(dir, flingForce));
        } catch (e) {
        }
        pendingFling.push({ obj, dir, until: Date.now() + 1200 });
      } catch (e) {
      }
    }
    function PrefabGun(itemName) {
      if (!rightGrab)
        return;
      Il2Cpp.perform(() => {
        try {
          let pos = null;
          let rot = null;
          try {
            pos = leftHandTransform.method("get_position").invoke();
          } catch (e) {
          }
          try {
            rot = leftHandTransform.method("get_rotation").invoke();
          } catch (e) {
            rot = identityQuaternion;
          }
          let obj = null;
          try {
            obj = PhotonNetwork.method("Instantiate", 5).invoke(Il2Cpp.string(itemName), pos, rot, 0, NULL);
          } catch (e) {
          }
          if (obj == null || obj.isNull()) {
            try {
              const prefab = Resources.method("Load", 1).invoke(Il2Cpp.string(itemName), GameObject.type.object);
              if (prefab != null && !prefab.isNull()) {
                obj = Object.method("Instantiate", 3).invoke(prefab, pos, rot);
              }
            } catch (e) {
            }
          }
          if (obj != null && !obj.isNull() && flingEnabled) {
            let dir = null;
            try {
              dir = leftHandTransform.method("get_forward").invoke();
            } catch (e) {
            }
            if (dir != null)
              applyFlingTo(obj, dir);
          }
          sendAllOutgoing();
        } catch (e) {
        }
      });
    }
    function frameFlingQueue() {
      const now = Date.now();
      for (let i = pendingFling.length - 1; i >= 0; i--) {
        try {
          const f = pendingFling[i];
          if (f.obj == null || f.obj.isNull() || f.until < now) {
            pendingFling.splice(i, 1);
            continue;
          }
          let rb = null;
          try {
            rb = f.obj.method("GetComponentInChildren", 1).inflate(Rigidbody).invoke();
          } catch (e) {
          }
          try {
            if (rb != null && !rb.isNull()) {
              rb.method("set_linearVelocity").invoke(Vector3.method("op_Multiply", 2).invoke(f.dir, flingForce));
            }
          } catch (e) {
          }
        } catch (e) {
          pendingFling.splice(i, 1);
        }
      }
    }
    function longArms(on) {
      Il2Cpp.perform(() => {
        try {
          const p = PlayerClass.method("get_Instance").invoke();
          if (p == null || p.isNull()) {
            sendNotification("Player not found", false, 2);
            return;
          }
          if (longArmsOriginalLength === null) {
            try {
              longArmsOriginalLength = p.field("maxArmLength").value;
            } catch (e) {
            }
          }
          const len = on ? 100 : longArmsOriginalLength !== null ? longArmsOriginalLength : 0.9;
          try {
            p.field("maxArmLength").value = len;
          } catch (e) {
          }
          try {
            const m = getMods();
            if (m != null && !m.isNull()) {
              m.field("_toggleLongArms").value = on;
            }
          } catch (e) {
          }
          sendNotification(on ? "Long arms ON (extended reach)" : "Long arms OFF", false, 2);
        } catch (e) {
        }
      });
    }
    function flyB_setSpeed(delta) {
      flySpeed = Math.max(1, flySpeed + delta);
      sendNotification("Fly speed: " + flySpeed, false, 2);
    }
    buttons[17] = [
      new ButtonInfo({
        buttonText: "Exit Movement Mods",
        method: () => {
          currentCategory = 0;
          currentPage = 0;
        },
        isTogglable: false
      }),
      ,
      new ButtonInfo({
        buttonText: "Fly & No Grav (A)",
        method: () => {
          flyAOn = true;
        },
        enableMethod: () => {
          flyAOn = true;
        },
        disableMethod: () => {
          flyAOn = false;
        },
        isTogglable: true
      }),
      new ButtonInfo({
        buttonText: "Platforms",
        method: () => {
          if (leftGrab && leftPlatform == null) {
            leftPlatform = createObject(Vector3.method("op_Addition", 2).invoke(leftHandTransform.method("get_position").invoke(), [0, -0.035, 0]), leftHandTransform.method("get_rotation").invoke(), [0.035, 0.15, 0.35], 3, bgColor, null, true);
            try {
              const pcol = getComponent(leftPlatform, Collider);
              if (pcol != null && !pcol.isNull())
                pcol.method("set_isTrigger").invoke(false);
            } catch (e) {
            }
          } else if (!leftGrab && leftPlatform != null) {
            Destroy(leftPlatform);
            leftPlatform = null;
          }
        },
        isTogglable: true,
        toolTip: "Press while grabbing to spawn platform on that hand"
      }),
      new ButtonInfo({
        buttonText: "Noclip (RT)",
        method: () => {
          try {
            if (rightTrigger && !previousNoclipKey) {
              toggleColliders(false);
            }
            if (!rightTrigger && previousNoclipKey) {
              toggleColliders(true);
            }
            previousNoclipKey = rightTrigger;
          } catch (e) {
          }
        },
        isTogglable: true
      }),
      new ButtonInfo({
        buttonText: "RT Fly & No Grav",
        method: () => {
          rtFlyOn = true;
        },
        enableMethod: () => {
          rtFlyOn = true;
        },
        disableMethod: () => {
          rtFlyOn = false;
        },
        isTogglable: true
      })
    ];
    buttons[19] = [
      new ButtonInfo({
        buttonText: "Exit Name Mods",
        method: () => {
          currentCategory = 0;
          currentPage = 0;
        },
        isTogglable: false
      }),
      new ButtonInfo({
        buttonText: "ex ontop",
        method: () => {
          Il2Cpp.perform(() => {
            try {
              SetName("<size=58><color=#b14d95>exploding ontop looool");
            } catch (e) {
            }
          });
        },
        isTogglable: false
      }),
      new ButtonInfo({
        buttonText: "dont press dis",
        method: () => {
          Il2Cpp.perform(() => {
            try {
              SetName("Ima suck ya dick");
            } catch (e) {
            }
          });
        },
        isTogglable: false
      }),
      new ButtonInfo({
        buttonText: "large name",
        method: () => {
          Il2Cpp.perform(() => {
            try {
              SetName("<size=-90000><color=#FFFFFF>im horny");
            } catch (e) {
            }
          });
        },
        isTogglable: false
      })
    ];
    buttons[20] = [
      new ButtonInfo({
        buttonText: "Exit spawner",
        method: () => {
          currentCategory = 0;
          currentPage = 0;
        },
        isTogglable: false
      }),
      new ButtonInfo({
        buttonText: "spawn grappler",
        method: () => PrefabGun("Prefabs/Grabbables/GRAPPLER"),
        isTogglable: true
      }),
      new ButtonInfo({
        buttonText: "spawn rocket hand",
        method: () => PrefabGun("prefabs/grabbables/rockethand"),
        isTogglable: true
      }),
      new ButtonInfo({
        buttonText: "spawn backpack",
        method: () => PrefabGun("Prefabs/Grabbables/BACKPACK"),
        isTogglable: true
      }),
      new ButtonInfo({
        buttonText: "spawn backpack but big",
        method: () => PrefabGun("Prefabs/Grabbables/BIGBACKPACK"),
        isTogglable: true
      }),
      new ButtonInfo({
        buttonText: "spawn boombox",
        method: () => PrefabGun("Prefabs/Grabbables/BOOMBOX"),
        isTogglable: true
      }),
      new ButtonInfo({
        buttonText: "spawn fuse",
        method: () => PrefabGun("Prefabs/Grabbables/FUSE"),
        isTogglable: true
      }),
      new ButtonInfo({
        buttonText: "spawn boombox but blue",
        method: () => PrefabGun("Prefabs/Grabbables/BOOMBOX_BLUE"),
        isTogglable: true
      })
    ];
    buttons[21] = [
      new ButtonInfo({
        buttonText: "Exit Players",
        method: () => {
          currentCategory = 0;
          currentPage = 0;
        },
        isTogglable: false
      })
    ];
    buttons[27] = [
      new ButtonInfo({
        buttonText: "Exit player",
        method: () => {
          currentCategory = 0;
          currentPage = 0;
        },
        isTogglable: false
      }),
      new ButtonInfo({
        buttonText: "rgb",
        enableMethod: () => {
          rgbColorEnabled = true;
          lastRgbApply = 0;
        },
        disableMethod: () => {
          rgbColorEnabled = false;
        },
        isTogglable: true
      }),
      new ButtonInfo({
        buttonText: "bright rgb (dont really work)",
        method: () => {
          const color = getSmoothColor();
          PhotonVRManagerClass.method("SetColour").invoke([
            color.r * 3,
            color.g * 3,
            color.b * 3,
            color.a * 9999
          ]);
        }
      }),
      new ButtonInfo({
        buttonText: "strobe",
        enableMethod: () => {
          strobeEnabled = true;
          lastStrobeTime = 0;
        },
        disableMethod: () => {
          strobeEnabled = false;
        },
        isTogglable: true
      })
    ];
    buttons[28] = [
      new ButtonInfo({
        buttonText: "Exit OP mods",
        method: () => {
          currentCategory = 0;
          currentPage = 0;
        },
        isTogglable: false
      }),
      new ButtonInfo({
        buttonText: "Lag Spike all",
        method: () => {
          for (let i = 0; i < 50; i++) {
            const thingforlag = PhotonNetwork.method("Instantiate", 5).invoke(Il2Cpp.string("Prefabs/Grabbables/BOOMBOX"), [100, -100, 0], identityQuaternion, 0, NULL);
            Destroy(thingforlag);
            sendAllOutgoing();
          }
        },
        isTogglable: false
      }),
      new ButtonInfo({
        buttonText: "crash all",
        method: () => {
          for (let i = 0; i < 1500; i++) {
            const thingforlag = PhotonNetwork.method("Instantiate", 5).invoke(Il2Cpp.string("Prefabs/Grabbables/BOOMBOX"), [100, -100, 0], identityQuaternion, 0, NULL);
            Destroy(thingforlag);
            sendAllOutgoing();
          }
        },
        isTogglable: false
      })
    ];
    buttons[0].push(new ButtonInfo({ buttonText: "spawner", method: () => {
      currentCategory = 20;
      currentPage = 0;
    }, isTogglable: false }));
    buttons[0].push(new ButtonInfo({ buttonText: "movement", method: () => {
      currentCategory = 17;
      currentPage = 0;
    }, isTogglable: false }));
    buttons[0].push(new ButtonInfo({ buttonText: "name mods", method: () => {
      currentCategory = 19;
      currentPage = 0;
    }, isTogglable: false }));
    buttons[0].push(new ButtonInfo({ buttonText: "OP mods", method: () => {
      currentCategory = 28;
      currentPage = 0;
    }, isTogglable: false }));
    buttons[0].push(new ButtonInfo({ buttonText: "player", method: () => {
      currentCategory = 27;
      currentPage = 0;
    }, isTogglable: false }));
    rebuildButtonMap();
    setTimeout(() => {
      try {
        const m = getMods();
        if (m != null && !m.isNull()) {
          const syncBtn = (text, fieldName) => {
            try {
              const b = getIndex(text);
              if (b != null)
                b.enabled = !!m.field(fieldName).value;
            } catch (e) {
            }
          };
          syncBtn("Fly mod", "_toggleFly");
          syncBtn("Speed boost", "_toggleSpeedBoost");
          syncBtn("Extra speed", "_toggleExtraSpeedBoost");
          syncBtn("Long arms", "_toggleLongArms");
          syncBtn("Ghost monke", "_toggleGhostMonke");
          syncBtn("Platforms", "_togglePlatforms");
          syncBtn("Low gravity", "_toggleLowGravity");
          syncBtn("Flip gravity", "_toggleFlipGravity");
          syncBtn("Air swim", "_toggleAirSwim");
          syncBtn("RGB", "_toggleRGB");
        }
      } catch (e) {
      }
    }, 8e3);
    if (PVPPlayerClass != null) {
      try {
        PVPPlayerClass.method("TakeDamage").implementation = function(damage) {
          if (godModeEnabled)
            return;
          return this.method("TakeDamage").invoke(damage);
        };
      } catch (e) {
      }
      try {
        PVPPlayerClass.method("HandleDamage").implementation = function(damage) {
          if (godModeEnabled)
            return;
          return this.method("HandleDamage").invoke(damage);
        };
      } catch (e) {
      }
      try {
        PVPPlayerClass.method("RPC_DamagePlayer").implementation = function(damage) {
          if (godModeEnabled)
            return;
          return this.method("RPC_DamagePlayer").invoke(damage);
        };
      } catch (e) {
      }
    }
    if (PhotonVRManagerClass != null) {
      try {
        PhotonVRManagerClass.method("OnDisconnected").implementation = function(cause) {
          try {
            let v = "unknown";
            try {
              v = String(cause);
            } catch (e) {
            }
            try {
              if (cause != null && typeof cause === "object" && cause.value !== void 0)
                v = String(cause.value);
            } catch (e) {
            }
            try {
              if (typeof cause === "number")
                v = String(cause);
            } catch (e) {
            }
          } catch (e) {
          }
          return this.method("OnDisconnected").invoke(cause);
        };
      } catch (e) {
      }
    }
    try {
      const DestroyGuardClass = classOf(AssemblyCSharp, "LethalApeR.Networking.DestroyGuard");
      if (DestroyGuardClass != null) {
        DestroyGuardClass.method("Flag").implementation = function(senderActor, detail) {
          try {
            let d = "?";
            try {
              d = String(detail);
            } catch (e) {
            }
            console.log("[net] DestroyGuard.Flag actor=" + String(senderActor) + " detail=" + d + " at " + (/* @__PURE__ */ new Date()).toLocaleTimeString());
          } catch (e) {
          }
          return this.method("Flag").invoke(senderActor, detail);
        };
      }
    } catch (e) {
    }
    if (WardrobeManagerClass != null) {
      try {
        WardrobeManagerClass.method("RefreshCosmetics").implementation = function() {
          try {
            this.method("RefreshCosmetics").invoke();
          } catch (e) {
          }
          try {
            const all = this.field("_cosmetics").value;
            if (all == null || all.isNull())
              return;
            const owned = this.field("ownedCosmetics").value;
            if (owned == null || owned.isNull())
              return;
            const allCount = all.method("get_Count").invoke();
            const ownedCount = owned.method("get_Count").invoke();
            for (let i = 0; i < allCount; i++) {
              try {
                const g = all.method("get_Item").invoke(i);
                if (g == null || g.isNull())
                  continue;
                let has = false;
                for (let j = 0; j < ownedCount; j++) {
                  try {
                    if (owned.method("get_Item").invoke(j).handle.equals(g.handle)) {
                      has = true;
                      break;
                    }
                  } catch (e2) {
                  }
                }
                if (!has) {
                  try {
                    owned.method("Add").invoke(g);
                  } catch (e2) {
                  }
                }
              } catch (e2) {
              }
            }
          } catch (e) {
          }
        };
      } catch (e) {
      }
    }
    let isPlayingSound = false;
    let soundEndTime = 0;
    let currentPlayingClip = null;
    let soundPreviewObject = null;
    let soundPreviewSource = null;
    const soundboardCache = /* @__PURE__ */ new Map();
    let soundboardArmed = null;
    let fullSoundList = [];
    let loudMicEnabled = false;
    let hearMyselfEnabled = false;
    let lastHearMyselfApply = 0;
    let lastHearMyselfDump = 0;
    function getFileNameWithoutExtension(path) {
      const parts = path.replace(/\\/g, "/").split("/");
      const last = parts[parts.length - 1];
      const dotIdx = last.lastIndexOf(".");
      return dotIdx === -1 ? last : last.substring(0, dotIdx);
    }
    function getFileExtension(path) {
      const cleanPath = path.split("?")[0].split("#")[0];
      const dotIdx = cleanPath.lastIndexOf(".");
      return dotIdx === -1 ? "" : cleanPath.substring(dotIdx + 1).toLowerCase();
    }
    function KillGun() {
      if (!rightGrab)
        return;
      const gunData = renderGun(-1);
      const gunPointer = gunData.gunPointer;
      if (rightTrigger) {
        const targetPos = getTransform(gunPointer).method("get_position").invoke();
        const allPhotonViews = Object.method("FindObjectsOfType").inflate(Il2Cpp.domain.assembly("PhotonUnityNetworking").image.class("Photon.Pun.PhotonView")).invoke();
        for (let i = 0; i < allPhotonViews.length; i++) {
          const pv = allPhotonViews.get(i);
          const go = pv.method("get_gameObject").invoke();
          if (!go)
            continue;
          const name = go.method("get_name").invoke().toString().toLowerCase();
          if (!name.includes("sandman"))
            continue;
          const transform = getTransform(go);
          transform.method("set_position").invoke(targetPos);
          try {
            const rb = go.method("GetComponent").inflate(Il2Cpp.domain.assembly("UnityEngine.PhysicsModule").image.class("UnityEngine.Rigidbody")).invoke();
            if (rb && !rb.isNull()) {
              rb.method("set_isKinematic").invoke(true);
              rb.method("set_velocity").invoke(Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.Vector3").field("zero").value);
              rb.method("set_angularVelocity").invoke(Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.Vector3").field("zero").value);
            }
          } catch (_) {
          }
          try {
            const pun = pv.method("get_IsMine").invoke();
            if (pun) {
              pv.method("RPC").invoke(Il2Cpp.string("SyncPosition"), Il2Cpp.domain.assembly("PhotonUnityNetworking").image.class("Photon.Pun.RpcTarget").field("All").value, targetPos);
            }
          } catch (_) {
          }
          sendAllOutgoing();
          break;
        }
      }
    }
    function getRecorder() {
      try {
        if (PhotonVoiceViewClass != null) {
          const views = findObjectsOfType(PhotonVoiceViewClass);
          console.log("[VOICE] PhotonVoiceView search: " + (views && !views.isNull() ? views.length : "null/empty"));
          if (views && !views.isNull()) {
            for (let i = 0; i < views.length; i++) {
              try {
                const view = views.get(i);
                if (!view || view.isNull()) {
                  console.log("[VOICE]   view " + i + " is null");
                  continue;
                }
                const pv = view.field("photonView").value;
                if (!pv || pv.isNull()) {
                  console.log("[VOICE]   view " + i + " photonView null");
                  continue;
                }
                const isMine = pv.method("get_IsMine").invoke();
                console.log("[VOICE]   view " + i + " IsMine=" + isMine);
                if (!isMine)
                  continue;
                const rec = view.method("get_RecorderInUse").invoke();
                console.log("[VOICE]   view " + i + " RecorderInUse=" + (rec ? "found" : "null") + (rec && !rec.isNull() ? " [" + rec.class.name + "]" : ""));
                if (rec && !rec.isNull())
                  return rec;
              } catch (e) {
                console.log("[VOICE]   view " + i + " error: " + e);
              }
            }
          }
        } else {
          console.log("[VOICE] PhotonVoiceViewClass is null");
        }
      } catch (e) {
        console.log("[VOICE] PhotonVoiceView search error: " + e);
      }
      try {
        if (PunVoiceClientClass != null) {
          const instance = PunVoiceClientClass.method("get_Instance").invoke();
          console.log("[VOICE] PunVoiceClient.Instance=" + (instance && !instance.isNull() ? "found" : "null"));
          if (instance && !instance.isNull()) {
            try {
              const primary = instance.method("get_PrimaryRecorder").invoke();
              console.log("[VOICE]   get_PrimaryRecorder=" + (primary && !primary.isNull() ? "found" : "null"));
              if (primary && !primary.isNull()) {
                return primary;
              }
            } catch (e) {
              console.log("[VOICE]   get_PrimaryRecorder error: " + e);
            }
            try {
              const primary = instance.field("primaryRecorder").value;
              console.log("[VOICE]   field primaryRecorder=" + (primary && !primary.isNull() ? "found" : "null"));
              if (primary && !primary.isNull()) {
                return primary;
              }
            } catch (e) {
              console.log("[VOICE]   field primaryRecorder error: " + e);
            }
          }
        } else {
          console.log("[VOICE] PunVoiceClientClass is null");
        }
      } catch (e) {
        console.log("[VOICE] PunVoiceClient path error: " + e);
      }
      try {
        if (VoiceConnectionClass != null) {
          const conns = findObjectsOfType(VoiceConnectionClass);
          console.log("[VOICE] VoiceConnection search: " + (conns && !conns.isNull() ? conns.length : "null/empty"));
          if (conns && !conns.isNull()) {
            for (let i = 0; i < conns.length; i++) {
              try {
                const conn = conns.get(i);
                if (!conn || conn.isNull())
                  continue;
                const primary = conn.method("get_PrimaryRecorder").invoke();
                console.log("[VOICE]   conn " + i + " PrimaryRecorder=" + (primary && !primary.isNull() ? "found" : "null"));
                if (primary && !primary.isNull()) {
                  return primary;
                }
              } catch (e) {
                console.log("[VOICE]   conn " + i + " error: " + e);
              }
            }
          }
        } else {
          console.log("[VOICE] VoiceConnectionClass is null");
        }
      } catch (e) {
        console.log("[VOICE] VoiceConnection path error: " + e);
      }
      try {
        if (RecorderClass == null) {
          console.log("[VOICE] RecorderClass is null");
          return null;
        }
        const RecorderFinder = findObjectOfType(RecorderClass);
        console.log("[VOICE] direct Recorder find=" + (RecorderFinder && !RecorderFinder.isNull() ? "found" : "null"));
        if (RecorderFinder && !RecorderFinder.isNull())
          return RecorderFinder;
      } catch (e) {
        console.log("[VOICE] direct Recorder error: " + e);
      }
      return null;
    }
    function clientStateName(v) {
      const names = {
        0: "PeerCreated",
        1: "Authenticating",
        2: "Authenticated",
        3: "JoiningLobby",
        4: "JoinedLobby",
        5: "DisconnectingFromMasterServer",
        6: "ConnectingToGameServer",
        7: "ConnectedToGameServer",
        8: "Joining",
        9: "Joined",
        10: "Leaving",
        11: "DisconnectingFromGameServer",
        12: "ConnectingToMasterServer",
        13: "Disconnecting",
        14: "Disconnected",
        15: "ConnectedToMasterServer",
        16: "ConnectingToNameServer",
        17: "ConnectedToNameServer",
        18: "DisconnectingFromNameServer",
        19: "ConnectWithFallbackProtocol"
      };
      const n = names[v];
      return n !== void 0 ? n + " (" + v + ")" : "UNKNOWN (" + v + ")";
    }
    function dumpRecorderState(recorder, tag) {
      try {
        if (!recorder || recorder.isNull()) {
          console.log("[VOICE] " + tag + ": recorder null");
          return;
        }
        console.log("[VOICE] " + tag + ": class=" + recorder.class.name);
        console.log("[VOICE] " + tag + ": DebugEchoMode=" + (() => {
          try {
            return !!recorder.method("get_DebugEchoMode").invoke();
          } catch (e) {
            return "ERR:" + e;
          }
        })());
        console.log("[VOICE] " + tag + ": TransmitEnabled=" + (() => {
          try {
            return !!recorder.method("get_TransmitEnabled").invoke();
          } catch (e) {
            return "ERR:" + e;
          }
        })());
        console.log("[VOICE] " + tag + ": RecordingEnabled=" + (() => {
          try {
            return !!recorder.method("get_RecordingEnabled").invoke();
          } catch (e) {
            return "ERR:" + e;
          }
        })());
        console.log("[VOICE] " + tag + ": VoiceDetection=" + (() => {
          try {
            return !!recorder.method("get_VoiceDetection").invoke();
          } catch (e) {
            return "ERR:" + e;
          }
        })());
        console.log("[VOICE] " + tag + ": SourceType=" + (() => {
          try {
            return recorder.method("get_SourceType").invoke();
          } catch (e) {
            return "ERR:" + e;
          }
        })());
        console.log("[VOICE] " + tag + ": IsCurrentlyTransmitting=" + (() => {
          try {
            return !!recorder.method("get_IsCurrentlyTransmitting").invoke();
          } catch (e) {
            return "ERR:" + e;
          }
        })());
        try {
          const vo = recorder.field("voice").value;
          console.log("[VOICE] " + tag + ": voice=" + (vo && !vo.isNull() ? "EXISTS (" + vo.class.name + ") handle=0x" + vo.handle.toString(16) : "null"));
        } catch (e) {
          console.log("[VOICE] " + tag + ": voice field ERR:" + e);
        }
        try {
          if (PunVoiceClientClass != null) {
            const inst = PunVoiceClientClass.method("get_Instance").invoke();
            if (inst && !inst.isNull()) {
              let csm = null;
              try {
                csm = inst.method("get_ClientState").invoke();
              } catch (e) {
                console.log("[VOICE] " + tag + ": ClientState get ERR:" + e);
              }
              if (csm != null) {
                let v = null;
                try {
                  v = csm.value;
                } catch (e) {
                }
                if (v === null || v === void 0) {
                  try {
                    v = csm.field("value__").value;
                  } catch (e) {
                  }
                }
                console.log("[VOICE] " + tag + ": PunVoiceClient ClientState=" + (v !== null && v !== void 0 ? clientStateName(v) : "unreadable"));
              } else {
                console.log("[VOICE] " + tag + ": ClientState returned null");
              }
            } else {
              console.log("[VOICE] " + tag + ": PunVoiceClient instance null");
            }
          } else {
            console.log("[VOICE] " + tag + ": PunVoiceClientClass null");
          }
        } catch (e) {
          console.log("[VOICE] " + tag + ": ClientState ERR:" + e);
        }
        try {
          if (SpeakerClass != null) {
            const spk = findObjectsOfType(SpeakerClass);
            console.log("[VOICE] " + tag + ": Speakers=" + (spk && !spk.isNull() ? spk.length : "none"));
            if (spk && !spk.isNull()) {
              for (let i = 0; i < spk.length; i++) {
                try {
                  const s = spk.get(i);
                  const linked = (() => {
                    try {
                      return !!s.method("get_IsLinked").invoke();
                    } catch (e) {
                      return "ERR";
                    }
                  })();
                  const playing = (() => {
                    try {
                      return !!s.method("get_IsPlaying").invoke();
                    } catch (e) {
                      return "ERR";
                    }
                  })();
                  console.log("[VOICE]   speaker " + i + ": linked=" + linked + " playing=" + playing);
                } catch (e) {
                }
              }
            }
          } else {
            console.log("[VOICE] " + tag + ": SpeakerClass null");
          }
        } catch (e) {
          console.log("[VOICE] " + tag + ": Speakers ERR:" + e);
        }
      } catch (e) {
        console.log("[VOICE] " + tag + " dump error: " + e);
      }
    }
    function restartRecorder(recorder) {
      try {
        const r = recorder.method("RestartRecording").invoke();
        console.log("[VOICE] RestartRecording() -> " + r);
        return;
      } catch (e) {
        console.log("[VOICE] RestartRecording() error: " + e);
      }
      try {
        const r = recorder.method("RestartRecording", 1).invoke(true);
        console.log("[VOICE] RestartRecording(true) -> " + r);
        return;
      } catch (e) {
        console.log("[VOICE] RestartRecording(true) error: " + e);
      }
      try {
        recorder.method("StopRecording").invoke();
        console.log("[VOICE] StopRecording ok");
      } catch (e) {
        console.log("[VOICE] StopRecording error: " + e);
      }
      try {
        recorder.method("StartRecording").invoke();
        console.log("[VOICE] StartRecording ok");
      } catch (e) {
        console.log("[VOICE] StartRecording error: " + e);
      }
    }
    function applyLoudMic(enabled) {
      loudMicEnabled = enabled;
      try {
        const recorder = getRecorder();
        if (recorder && !recorder.isNull()) {
          try {
            recorder.method("set_Bitrate").invoke(enabled ? 192e3 : 24e3);
          } catch (e) {
          }
          try {
            recorder.method("set_SamplingRate").invoke(enabled ? 48e3 : 24e3);
          } catch (e) {
          }
          restartRecorder(recorder);
        }
      } catch (e) {
      }
    }
    let lastVoiceHandle = null;
    let lastVoiceReapplyTime = 0;
    function toggleHearMyself(enabled) {
      hearMyselfEnabled = enabled;
      lastHearMyselfApply = 0;
      console.log("[VOICE] toggleHearMyself(" + enabled + ") START");
      try {
        const recorder = getRecorder();
        if (recorder == null || recorder.isNull()) {
          console.log("[VOICE] hear myself: no recorder found (getRecorder returned null)");
          return;
        }
        dumpRecorderState(recorder, "before toggle");
        let setOk = false;
        try {
          recorder.method("set_DebugEchoMode").invoke(enabled);
          setOk = true;
          console.log("[VOICE] set_DebugEchoMode(" + enabled + ") ok");
        } catch (e) {
          console.log("[VOICE] set_DebugEchoMode error: " + e);
        }
        try {
          const after = !!recorder.method("get_DebugEchoMode").invoke();
          console.log("[VOICE] readback DebugEchoMode=" + after);
          if (after !== enabled) {
            try {
              recorder.field("debugEchoMode").value = enabled;
              setOk = true;
              console.log("[VOICE] field debugEchoMode written -> " + enabled);
            } catch (e) {
              console.log("[VOICE] field debugEchoMode write error: " + e);
            }
          }
        } catch (e) {
          console.log("[VOICE] readback error: " + e);
        }
        if (!setOk) {
          try {
            recorder.field("debugEchoMode").value = enabled;
            console.log("[VOICE] fallback field debugEchoMode written -> " + enabled);
          } catch (e) {
            console.log("[VOICE] fallback field write error: " + e);
          }
        }
        if (enabled) {
          try {
            recorder.method("set_VoiceDetection").invoke(false);
            console.log("[VOICE] VoiceDetection forced off");
          } catch (e) {
            console.log("[VOICE] set_VoiceDetection error: " + e);
          }
          try {
            recorder.method("set_TransmitEnabled").invoke(true);
          } catch (e) {
          }
          try {
            recorder.method("set_RecordingEnabled").invoke(true);
          } catch (e) {
          }
        }
        console.log("[VOICE] hear myself -> " + enabled);
        try {
          const vo = recorder.field("voice").value;
          console.log("[VOICE] voice handle before restart=0x" + (vo && !vo.isNull() ? vo.handle.toString(16) : "null"));
        } catch (e) {
        }
        restartRecorder(recorder);
        try {
          const vo = recorder.field("voice").value;
          if (vo && !vo.isNull())
            lastVoiceHandle = vo.handle;
          console.log("[VOICE] voice handle after restart=0x" + (vo && !vo.isNull() ? vo.handle.toString(16) : "null"));
        } catch (e) {
        }
        dumpRecorderState(recorder, "after toggle");
      } catch (e) {
        console.log("[VOICE] hear myself error: " + e);
      }
      console.log("[VOICE] toggleHearMyself END");
    }
    function applyHearMyself() {
      try {
        if (!hearMyselfEnabled)
          return;
        const recorder = getRecorder();
        if (recorder == null || recorder.isNull()) {
          console.log("[VOICE] applyHearMyself: recorder null");
          return;
        }
        let cur = false;
        try {
          cur = !!recorder.method("get_DebugEchoMode").invoke();
        } catch (e) {
        }
        console.log("[VOICE] applyHearMyself: current DebugEchoMode=" + cur);
        if (cur) {
          try {
            const vo = recorder.field("voice").value;
            if (vo && !vo.isNull()) {
              const h = vo.handle;
              if (lastVoiceHandle != null && h !== lastVoiceHandle) {
                console.log("[VOICE] applyHearMyself: voice recreated (0x" + lastVoiceHandle.toString(16) + " -> 0x" + h.toString(16) + ")");
                if (time - lastVoiceReapplyTime > 3) {
                  lastVoiceReapplyTime = time;
                  try {
                    recorder.method("set_DebugEchoMode").invoke(true);
                  } catch (e) {
                  }
                  restartRecorder(recorder);
                  console.log("[VOICE] applyHearMyself: re-applied echo + restarted (capped)");
                }
              }
              lastVoiceHandle = h;
            }
          } catch (e) {
          }
          console.log("[VOICE] applyHearMyself: already true, skipping");
          return;
        }
        try {
          recorder.method("set_DebugEchoMode").invoke(true);
        } catch (e) {
          console.log("[VOICE] applyHearMyself set error: " + e);
        }
        try {
          if (!recorder.method("get_DebugEchoMode").invoke()) {
            try {
              recorder.field("debugEchoMode").value = true;
              console.log("[VOICE] applyHearMyself: field fallback written");
            } catch (e) {
              console.log("[VOICE] applyHearMyself field error: " + e);
            }
          }
        } catch (e) {
        }
        try {
          recorder.method("set_VoiceDetection").invoke(false);
        } catch (e) {
        }
        restartRecorder(recorder);
        console.log("[VOICE] applyHearMyself: reapplied + restarted");
      } catch (e) {
        console.log("[VOICE] applyHearMyself error: " + e);
      }
    }
    function getSoundPreviewSource() {
      try {
        if (soundPreviewSource && !soundPreviewSource.isNull?.()) {
          try {
            soundPreviewSource.method("get_enabled").invoke();
            return soundPreviewSource;
          } catch (e) {
          }
        }
      } catch (e) {
      }
      try {
        soundPreviewObject = createObject(zeroVector, identityQuaternion, [1e-3, 1e-3, 1e-3], 0, [0, 0, 0, 0]);
        Object.method("DontDestroyOnLoad", 1).invoke(soundPreviewObject);
        try {
          Destroy(getComponent(soundPreviewObject, BoxCollider));
        } catch (e) {
        }
        if (AudioSourceClass == null)
          return null;
        soundPreviewSource = addComponent(soundPreviewObject, AudioSourceClass);
        soundPreviewSource.method("set_playOnAwake").invoke(false);
        soundPreviewSource.method("set_loop").invoke(false);
        soundPreviewSource.method("set_spatialBlend").invoke(0);
        soundPreviewSource.method("set_volume").invoke(1);
        return soundPreviewSource;
      } catch (e) {
        return null;
      }
    }
    function playLocalSoundPreview(clip) {
      try {
        const source = getSoundPreviewSource();
        if (!source || source.isNull?.())
          return;
        try {
          source.method("Stop").invoke();
        } catch (e) {
        }
        source.method("set_clip").invoke(clip);
        source.method("set_time").invoke(0);
        source.method("set_volume").invoke(1);
        source.method("set_spatialBlend").invoke(0);
        source.method("set_loop").invoke(false);
        source.method("set_mute").invoke(false);
        source.method("set_enabled").invoke(true);
        source.method("Play", 0).invoke();
      } catch (e) {
      }
    }
    function stopLocalSoundPreview() {
      try {
        const src = getSoundPreviewSource();
        if (!src || src.isNull?.())
          return;
        try {
          src.method("Stop").invoke();
        } catch (e) {
        }
        try {
          src.method("set_clip").invoke(NULL);
        } catch (e) {
        }
      } catch (e) {
      }
    }
    function stopSound() {
      stopLocalSoundPreview();
      const recorder = getRecorder();
      if (recorder && !recorder.isNull()) {
        try {
          try {
            recorder.method("StopRecording").invoke();
          } catch (e) {
          }
          try {
            recorder.method("set_RecordingEnabled").invoke(true);
          } catch (e) {
          }
          try {
            recorder.method("set_SourceType").invoke(0);
          } catch (e) {
          }
          try {
            recorder.method("set_AudioClip").invoke(NULL);
          } catch (e) {
          }
          try {
            recorder.method("set_LoopAudioClip").invoke(false);
          } catch (e) {
          }
          try {
            recorder.method("set_TransmitEnabled").invoke(true);
          } catch (e) {
          }
          try {
            recorder.method("set_UseOnAudioFilterRead").invoke(false);
          } catch (e) {
          }
          try {
            recorder.method("set_VoiceDetection").invoke(false);
          } catch (e) {
          }
          restartRecorder(recorder);
        } catch (e) {
        }
      }
      isPlayingSound = false;
      currentPlayingClip = null;
    }
    function parseWavBuffer(filePath, buffer) {
      const len = buffer.length;
      const view = new DataView(buffer.buffer);
      if (view.getUint32(0, true) !== 1179011410) {
        return null;
      }
      if (view.getUint32(8, true) !== 1163280727) {
        return null;
      }
      let offset = 12;
      let channels = 0;
      let sampleRate = 0;
      let bitsPerSample = 0;
      let dataOffset = 0;
      let dataSize = 0;
      while (offset < len - 8) {
        const chunkId = view.getUint32(offset, true);
        const chunkSize = view.getUint32(offset + 4, true);
        offset += 8;
        if (chunkId === 544501094) {
          channels = view.getUint16(offset + 2, true);
          sampleRate = view.getUint32(offset + 4, true);
          bitsPerSample = view.getUint16(offset + 14, true);
        } else if (chunkId === 1635017060) {
          dataOffset = offset;
          dataSize = chunkSize;
          break;
        }
        offset += chunkSize % 2 === 0 ? chunkSize : chunkSize + 1;
      }
      if (dataOffset === 0 || dataSize === 0) {
        return null;
      }
      let sampleCount = 0;
      let floatSamples;
      const inv32768 = 1 / 32768;
      const inv128 = 1 / 128;
      if (bitsPerSample === 16) {
        sampleCount = dataSize >> 1;
        const s16 = new Int16Array(buffer.buffer, dataOffset, sampleCount);
        floatSamples = new Float32Array(sampleCount);
        for (let i = 0; i < sampleCount; i++)
          floatSamples[i] = s16[i] * inv32768;
      } else if (bitsPerSample === 8) {
        sampleCount = dataSize;
        const u8 = new Uint8Array(buffer.buffer, dataOffset, sampleCount);
        floatSamples = new Float32Array(sampleCount);
        for (let i = 0; i < sampleCount; i++)
          floatSamples[i] = (u8[i] - 128) * inv128;
      } else if (bitsPerSample === 32) {
        sampleCount = dataSize >> 2;
        const f32 = new Float32Array(buffer.buffer, dataOffset, sampleCount);
        floatSamples = new Float32Array(sampleCount);
        floatSamples.set(f32);
      } else {
        return null;
      }
      if (loudMicEnabled) {
        const boost = 2.5;
        for (let i = 0; i < floatSamples.length; i++) {
          let s = floatSamples[i] * boost;
          if (s > 1)
            s = 1;
          if (s < -1)
            s = -1;
          floatSamples[i] = s;
        }
      }
      if (AudioClipClass == null) {
        return null;
      }
      return buildClipFromFloats(filePath, floatSamples, sampleRate, channels);
    }
    function buildClipFromFloats(filePath, floatSamples, sampleRate, channels) {
      try {
        if (AudioClipClass == null) {
          return null;
        }
        const nameOnly = getFileNameWithoutExtension(filePath);
        const createM = AudioClipClass.tryMethod("Create", 6) || AudioClipClass.tryMethod("Create", 5) || AudioClipClass.tryMethod("Create", 7);
        if (!createM) {
          return null;
        }
        const sampleCount = floatSamples.length;
        const createArgs = [Il2Cpp.string(nameOnly), sampleCount / channels, channels, sampleRate, false];
        while (createArgs.length < createM.parameters.length)
          createArgs.push(NULL);
        const unityClip = createM.invoke(...createArgs);
        const floatClass = Il2Cpp.domain.assembly("mscorlib").image.class("System.Single");
        const unityArray = Il2Cpp.array(floatClass, sampleCount);
        try {
          unityArray.elements.handle.writeByteArray(new Uint8Array(floatSamples.buffer));
          const probe = new Float32Array(unityArray.elements.handle.readByteArray(Math.min(16, sampleCount * 4)));
          if (Math.abs(probe[0] - floatSamples[0]) > 1e-4) {
            for (let i = 0; i < floatSamples.length; i++)
              unityArray.set(i, floatSamples[i]);
          }
        } catch (e) {
          throw e;
        }
        unityClip.method("SetData", 2).invoke(unityArray, 0);
        return { clip: unityClip, duration: sampleCount / (sampleRate * channels), sampleRate, channels };
      } catch (e) {
        return null;
      }
    }
    function parsePcmBuffer(filePath, pcm) {
      try {
        if (pcm == null || pcm.length < 2)
          return null;
        const sampleCount = pcm.length >> 1;
        const s16 = new Int16Array(pcm.buffer, pcm.byteOffset, sampleCount);
        const floatSamples = new Float32Array(sampleCount);
        const inv32768 = 1 / 32768;
        for (let i = 0; i < sampleCount; i++)
          floatSamples[i] = s16[i] * inv32768;
        if (loudMicEnabled) {
          const boost = 2.5;
          for (let i = 0; i < floatSamples.length; i++) {
            let s = floatSamples[i] * boost;
            if (s > 1)
              s = 1;
            if (s < -1)
              s = -1;
            floatSamples[i] = s;
          }
        }
        return buildClipFromFloats(filePath, floatSamples, 44100, 1);
      } catch (e) {
        return null;
      }
    }
    const soundConvertUrl = "https://fuzzy-bees-tan.loca.lt";
    let soundByteClass = null;
    function getSoundByteClass() {
      if (soundByteClass && !soundByteClass.isNull())
        return soundByteClass;
      const candidates = ["System.Private.CoreLib", "mscorlib", "System.Runtime", "netstandard"];
      for (const an of candidates) {
        try {
          const asm = Il2Cpp.domain.assembly(an);
          if (asm) {
            const k = asm.image.class("System.Byte");
            if (k) {
              soundByteClass = k;
              return k;
            }
          }
        } catch (e) {
        }
      }
      return null;
    }
    function soundBytesToIl2CppArray(bytes) {
      const cls = getSoundByteClass();
      if (!cls)
        throw new Error("no byte class");
      const arr = Il2Cpp.array(cls, bytes.length);
      arr.elements.handle.writeByteArray(bytes);
      return arr;
    }
    function asciiBytes(str) {
      const out = new Uint8Array(str.length);
      for (let i = 0; i < str.length; i++)
        out[i] = str.charCodeAt(i) & 255;
      return out;
    }
    function buildMultipartBody(fileBytes, fileName) {
      const boundary = "----bwah" + Date.now().toString(36) + Math.floor(Math.random() * 1e6).toString(36);
      const safeName = String(fileName).replace(/[^A-Za-z0-9._-]/g, "_");
      const head = "--" + boundary + '\r\nContent-Disposition: form-data; name="audio"; filename="' + safeName + '"\r\nContent-Type: application/octet-stream\r\n\r\n';
      const tail = "\r\n--" + boundary + "--\r\n";
      const headB = asciiBytes(head);
      const tailB = asciiBytes(tail);
      const body = new Uint8Array(headB.length + fileBytes.length + tailB.length);
      body.set(headB, 0);
      body.set(fileBytes, headB.length);
      body.set(tailB, headB.length + fileBytes.length);
      return { body, contentType: "multipart/form-data; boundary=" + boundary };
    }
    function postConvertSound(bodyBytes, contentType, onDone) {
      try {
        let uwrModule = null;
        try {
          uwrModule = Il2Cpp.domain.assembly("UnityEngine.UnityWebRequestModule").image;
        } catch (e) {
        }
        if (!uwrModule) {
          onDone(false, null);
          return;
        }
        const uwrClass = uwrModule.class("UnityEngine.Networking.UnityWebRequest");
        const bodyArr = soundBytesToIl2CppArray(bodyBytes);
        const upCls = uwrModule.class("UnityEngine.Networking.UploadHandlerRaw");
        const upInst = upCls.alloc();
        upInst.method(".ctor", ["System.Byte[]"]).invoke(bodyArr);
        const dlCls = uwrModule.class("UnityEngine.Networking.DownloadHandlerBuffer");
        const dlInst = dlCls.alloc();
        dlInst.method(".ctor").invoke();
        const req = uwrClass.method(".ctor", ["System.String", "System.String", "UnityEngine.Networking.DownloadHandler", "UnityEngine.Networking.UploadHandler"]).invoke(Il2Cpp.string(soundConvertUrl), Il2Cpp.string("POST"), dlInst, upInst);
        try {
          req.method("SetRequestHeader").invoke(Il2Cpp.string("Content-Type"), Il2Cpp.string(contentType));
        } catch (e) {
        }
        try {
          req.method("set_timeout").invoke(30);
        } catch (e) {
        }
        req.method("SendWebRequest").invoke();
        let attempts = 0;
        const poll = () => {
          attempts++;
          try {
            if (req.method("get_isDone").invoke()) {
              let code = -1;
              try {
                code = req.method("get_responseCode").invoke();
              } catch (e) {
              }
              if (code === 200) {
                const dh = req.method("get_downloadHandler").invoke();
                const data = dh.method("get_data").invoke();
                const n = data.length;
                const bytes = new Uint8Array(n);
                try {
                  const raw = new Uint8Array(data.elements.handle.readByteArray(n));
                  bytes.set(raw);
                } catch (e) {
                  for (let i = 0; i < n; i++)
                    bytes[i] = data.get(i);
                }
                onDone(true, bytes);
              } else {
                onDone(false, null);
              }
              return;
            }
            if (attempts > 600) {
              onDone(false, null);
              return;
            }
            setTimeout(poll, 50);
          } catch (e) {
            onDone(false, null);
          }
        };
        setTimeout(poll, 50);
      } catch (e) {
        onDone(false, null);
      }
    }
    function readFileBytesRaw(filePath) {
      try {
        const FileClass = Il2Cpp.domain.assembly("mscorlib").image.class("System.IO.File");
        const fileBytes = FileClass.method("ReadAllBytes", 1).invoke(Il2Cpp.string(filePath));
        if (fileBytes && !fileBytes.isNull()) {
          return new Uint8Array(fileBytes.elements.handle.readByteArray(fileBytes.length));
        }
      } catch (e) {
      }
      return null;
    }
    function loadSoundFile(filePath, onDone) {
      try {
        const ext = getFileExtension(filePath).toLowerCase();
        let buffer = readFileBytesRaw(filePath);
        if (!buffer || buffer.length === 0)
          buffer = libcReadFileBytes(filePath);
        if (!buffer || buffer.length === 0) {
          onDone(null);
          return;
        }
        if (ext === "wav") {
          onDone(parseWavBuffer(filePath, buffer));
          return;
        }
        if (ext !== "mp3") {
          onDone(null);
          return;
        }
        const mp = buildMultipartBody(buffer, String(filePath).split(/[\\/]/).pop() || "audio.mp3");
        postConvertSound(mp.body, mp.contentType, (ok, pcm) => {
          onDone(ok && pcm ? parsePcmBuffer(filePath, pcm) : null);
        });
      } catch (e) {
        onDone(null);
      }
    }
    function waveMagicOk(view) {
      try {
        return view.getUint32(0, true) === 1179011410 && view.getUint32(8, true) === 1163280727;
      } catch (_) {
        return false;
      }
    }
    function playLoadedSoundData(filePath, soundData) {
      const recorder = getRecorder();
      if (!recorder || recorder.isNull()) {
        return;
      }
      try {
        try {
          recorder.method("StopRecording").invoke();
        } catch (e) {
        }
        try {
          recorder.method("set_SourceType").invoke(1);
        } catch (e) {
        }
        const clipSet = { ok: true, err: "" };
        try {
          recorder.method("set_AudioClip").invoke(soundData.clip);
        } catch (e) {
          clipSet.ok = false;
          clipSet.err = String(e);
        }
        try {
          recorder.method("set_LoopAudioClip").invoke(false);
        } catch (e) {
        }
        try {
          recorder.method("set_TransmitEnabled").invoke(true);
        } catch (e) {
        }
        try {
          recorder.method("set_RecordingEnabled").invoke(true);
        } catch (e) {
        }
        try {
          recorder.method("set_ReliableMode").invoke(false);
        } catch (e) {
        }
        try {
          recorder.method("set_VoiceDetection").invoke(false);
        } catch (e) {
        }
        try {
          recorder.method("set_StopRecordingWhenPaused").invoke(false);
        } catch (e) {
        }
        try {
          recorder.method("set_DebugEchoMode").invoke(hearMyselfEnabled);
        } catch (e) {
        }
        if (loudMicEnabled) {
          try {
            recorder.method("set_Bitrate").invoke(192e3);
          } catch (e) {
          }
          try {
            recorder.method("set_SamplingRate").invoke(48e3);
          } catch (e) {
          }
        }
        if (!clipSet.ok) {
          return;
        }
        restartRecorder(recorder);
        try {
          recorder.method("StartRecording").invoke();
        } catch (e) {
          return;
        }
        isPlayingSound = true;
        soundEndTime = time + soundData.duration + 0.1;
        currentPlayingClip = soundData.clip;
      } catch (e) {
      }
    }
    function playSound(filePath) {
      if (isPlayingSound)
        stopSound();
      loadSoundFile(filePath, (sd) => {
        if (sd)
          playLoadedSoundData(filePath, sd);
      });
    }
    let libcOpen = null;
    let libcRead = null;
    let libcLseek = null;
    let libcClose = null;
    let libcOpendir = null;
    let libcReaddir = null;
    let libcClosedir = null;
    function ensureLibc() {
      if (libcOpen)
        return true;
      try {
        const libcMod = Process.findModuleByName("libc.so");
        if (!libcMod)
          return false;
        const exp = (name) => {
          try {
            const p = libcMod.findExportByName(name);
            return p && !p.isNull() ? p : null;
          } catch (_) {
            return null;
          }
        };
        libcOpen = new NativeFunction(exp("open") || NULL, "int", ["pointer", "int"]);
        libcRead = new NativeFunction(exp("read") || NULL, "long", ["int", "pointer", "ulong"]);
        libcLseek = new NativeFunction(exp("lseek64") || NULL, "long", ["int", "long", "int"]);
        if (libcLseek.isNull())
          libcLseek = new NativeFunction(exp("lseek") || NULL, "long", ["int", "long", "int"]);
        libcClose = new NativeFunction(exp("close") || NULL, "int", ["int"]);
        libcOpendir = new NativeFunction(exp("opendir") || NULL, "pointer", ["pointer"]);
        libcReaddir = new NativeFunction(exp("readdir64") || NULL, "pointer", ["pointer"]);
        if (libcReaddir.isNull())
          libcReaddir = new NativeFunction(exp("readdir") || NULL, "pointer", ["pointer"]);
        libcClosedir = new NativeFunction(exp("closedir") || NULL, "int", ["pointer"]);
        return !libcOpen.isNull();
      } catch (e) {
        return false;
      }
    }
    function libcReadFileBytes(filePath) {
      try {
        if (!ensureLibc()) {
          return null;
        }
        const path = Memory.allocUtf8String(filePath);
        const fd = libcOpen(path, 0);
        if (fd < 0) {
          return null;
        }
        const size = Number(libcLseek(fd, 0, 2));
        if (size <= 0) {
          return null;
        }
        libcLseek(fd, 0, 0);
        const buf = Memory.alloc(size);
        const got = Number(libcRead(fd, buf, size));
        libcClose(fd);
        if (got <= 0) {
          return null;
        }
        return new Uint8Array(buf.readByteArray(got));
      } catch (e) {
        return null;
      }
    }
    function libcListWavs(dir) {
      const out = [];
      try {
        if (!ensureLibc())
          return out;
        const dirHandle = libcOpendir(Memory.allocUtf8String(dir));
        if (dirHandle.isNull())
          return out;
        for (; ; ) {
          const entry = libcReaddir(dirHandle);
          if (entry.isNull())
            break;
          const d_name = entry.add(19).readUtf8String();
          if (!d_name)
            continue;
          if (d_name === "." || d_name === "..")
            continue;
          if (d_name.toLowerCase().endsWith(".wav") || d_name.toLowerCase().endsWith(".mp3"))
            out.push(dir + "/" + d_name);
        }
        libcClosedir(dirHandle);
      } catch (e) {
      }
      return out;
    }
    function writeTextFile(path, lines) {
      try {
        const f = new File(path, "w");
        f.write(lines.join("\n"));
        f.flush();
        f.close();
        return true;
      } catch (e) {
        return false;
      }
    }
    let dumpDir = null;
    function getDumpDir() {
      if (dumpDir != null)
        return dumpDir;
      try {
        const AppClass = UnityEngineCore.class("UnityEngine.Application");
        const pdp = String(AppClass.method("get_persistentDataPath").invoke()?.content ?? "");
        if (pdp) {
          dumpDir = pdp + "/";
          return dumpDir;
        }
      } catch (e) {
      }
      dumpDir = "/sdcard/Android/data/com.AnotherAxiom.LethalApe/files/";
      return dumpDir;
    }
    function dumpIl2CppAll() {
      sendNotification("Dumping il2cpp...", false, 10);
      try {
        const dir = getDumpDir();
        Il2Cpp.dump("lar_dump.cs", dir);
        sendNotification("Saved lar_dump.cs!", false, 10);
      } catch (e) {
        sendNotification("Dump failed: " + e, false, 10);
      }
    }
    function dumpPhotonPrefabs() {
      try {
        if (!PhotonUnityNetworking) {
          return;
        }
        const PhotonViewClass = PhotonUnityNetworking.class("Photon.Pun.PhotonView");
        const allPVs = Resources.method("FindObjectsOfTypeAll").overload("System.Type").invoke(PhotonViewClass.type.object);
        const lines = [];
        lines.push("Total PhotonViews found: " + allPVs.length);
        const unique = /* @__PURE__ */ new Set();
        for (let i = 0; i < allPVs.length; i++) {
          try {
            const view = allPVs.get(i);
            if (!view || view.isNull())
              continue;
            const go = view.method("get_gameObject").invoke();
            if (!go || go.isNull())
              continue;
            const name = go.method("get_name").invoke().toString();
            unique.add(String(name));
          } catch (e) {
          }
        }
        unique.forEach((name) => lines.push(name));
        const path = getDumpDir() + "lar_prefabs.txt";
        const ok = writeTextFile(path, lines);
        sendNotification(ok ? "Prefabs saved!" : "Prefab dump failed!", false, 8);
      } catch (e) {
        sendNotification("Prefab dump failed: " + e, false, 8);
      }
    }
    function dumpAssemblies() {
      try {
        const lines = [];
        for (const asm of Il2Cpp.domain.assemblies) {
          try {
            lines.push(String(asm.name) + " : " + String(asm.image.classes.length) + " classes");
          } catch (_) {
            lines.push(String(asm));
          }
        }
        const path = getDumpDir() + "lar_assemblies.txt";
        const ok = writeTextFile(path, lines);
        sendNotification(ok ? "Assemblies saved!" : "Assembly dump failed", false, 8);
      } catch (e) {
      }
    }
    function getPotentialSoundDirs() {
      const dirs = [];
      try {
        const AppClass = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.Application");
        try {
          const pdp = String(AppClass.method("get_persistentDataPath").invoke()?.content ?? "");
          if (pdp)
            dirs.push(pdp + "/sounds");
        } catch (e) {
        }
        try {
          const dp = String(AppClass.method("get_dataPath").invoke()?.content ?? "");
          if (dp) {
            const exeDir = dp.replace(/[\\/][^\\/]*$/, "").replace(/[\\/][^\\/]*_Data$/, "");
            if (exeDir && exeDir !== dp)
              dirs.push(exeDir + "/sounds");
          }
        } catch (e) {
        }
        try {
          const id = String(AppClass.method("get_identifier").invoke()?.content ?? "");
          if (id)
            dirs.push("/sdcard/Android/data/" + id + "/files/sounds");
        } catch (e) {
        }
      } catch (e) {
      }
      return dirs;
    }
    function rebuildSoundboardButtons() {
      const soundboardButtons = [
        new ButtonInfo({
          buttonText: "Exit Soundboard",
          method: () => {
            currentCategory = 0;
            currentPage = 0;
            reloadMenu();
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "Reload Sounds",
          method: () => {
            const files = scanSoundFiles();
            fullSoundList = files;
            soundsPreloadedOnce = true;
            preloadStartTime = Date.now();
            preloadSounds(files, 0);
            sendNotification("Reloading " + files.length + " sounds...", false, 2);
            rebuildSoundboardButtons();
            reloadMenu();
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "Stop All",
          method: () => {
            stopSound();
          },
          isTogglable: false
        }),
        new ButtonInfo({
          buttonText: "Hear Myself",
          method: () => {
          },
          enableMethod: () => {
            hearMyselfEnabled = true;
            toggleHearMyself(true);
            reloadMenu();
          },
          disableMethod: () => {
            hearMyselfEnabled = false;
            toggleHearMyself(false);
            reloadMenu();
          },
          isTogglable: true,
          enabled: hearMyselfEnabled
        }),
        new ButtonInfo({
          buttonText: "Loud Mic",
          method: () => {
          },
          enableMethod: () => {
            loudMicEnabled = true;
            applyLoudMic(true);
            reloadMenu();
          },
          disableMethod: () => {
            loudMicEnabled = false;
            applyLoudMic(false);
            reloadMenu();
          },
          isTogglable: true,
          enabled: loudMicEnabled
        })
      ];
      const scannedFiles = scanSoundFiles();
      if (scannedFiles.length === 0) {
        const tipDir = getPotentialSoundDirs()[0] || "sounds/";
        try {
          Il2Cpp.domain.assembly("mscorlib").image.class("System.IO.Directory").method("CreateDirectory", 1).invoke(Il2Cpp.string(tipDir));
        } catch (e) {
        }
        soundboardButtons.push(new ButtonInfo({
          buttonText: "No sounds found",
          method: () => {
          },
          isTogglable: false
        }));
      } else {
        for (const filePath of scannedFiles) {
          const nameOnly = getFileNameWithoutExtension(filePath);
          soundboardButtons.push(new ButtonInfo({
            buttonText: nameOnly,
            method: () => {
              if (soundboardArmed === filePath) {
                soundboardArmed = null;
                const cached = soundboardCache.get(filePath);
                if (cached) {
                  playLoadedSoundData(filePath, cached);
                } else {
                  loadSoundFile(filePath, (sd) => {
                    if (sd) {
                      soundboardCache.set(filePath, sd);
                      playLoadedSoundData(filePath, sd);
                    }
                  });
                }
              } else {
                soundboardArmed = null;
                if (soundboardCache.has(filePath)) {
                  soundboardArmed = filePath;
                } else {
                  loadSoundFile(filePath, (sd) => {
                    if (sd) {
                      soundboardCache.set(filePath, sd);
                      soundboardArmed = filePath;
                    }
                  });
                }
              }
            },
            isTogglable: false
          }));
        }
      }
      buttons[14] = soundboardButtons;
      rebuildButtonMap();
      fullSoundList = scannedFiles;
    }
    function scanSoundFiles() {
      const scanned = [];
      try {
        const DirClass = Il2Cpp.domain.assembly("mscorlib").image.class("System.IO.Directory");
        const dirs = getPotentialSoundDirs();
        for (const dir of dirs) {
          let got = [];
          try {
            const exists = DirClass.method("Exists", 1).invoke(Il2Cpp.string(dir));
            if (!exists)
              continue;
            try {
              const files = DirClass.method("GetFiles", 2).invoke(Il2Cpp.string(dir), Il2Cpp.string("*.wav"));
              if (files && !files.isNull()) {
                for (let i = 0; i < files.length; i++) {
                  const fp = String(files.get(i)?.content ?? files.get(i)?.toString?.() ?? "");
                  const ext = getFileExtension(fp);
                  if (ext === "wav" || ext === "WAV")
                    got.push(fp);
                }
              }
            } catch (e) {
              got = libcListWavs(dir);
            }
            try {
              const mfiles = DirClass.method("GetFiles", 2).invoke(Il2Cpp.string(dir), Il2Cpp.string("*.mp3"));
              if (mfiles && !mfiles.isNull()) {
                for (let i = 0; i < mfiles.length; i++) {
                  const fp = String(mfiles.get(i)?.content ?? mfiles.get(i)?.toString?.() ?? "");
                  const ext = getFileExtension(fp);
                  if (ext === "mp3" || ext === "MP3")
                    got.push(fp);
                }
              }
            } catch (e) {
            }
            if (got.length === 0)
              got = libcListWavs(dir);
            for (const fp of got)
              scanned.push(fp);
            if (scanned.length > 0)
              break;
          } catch (e) {
          }
        }
      } catch (e) {
      }
      return scanned;
    }
    let soundsPreloadedOnce = false;
    let preloadStartTime = 0;
    function preloadAllSoundsOnce() {
      if (soundsPreloadedOnce)
        return;
      soundsPreloadedOnce = true;
      try {
        const files = scanSoundFiles();
        fullSoundList = files;
        if (files.length > 0) {
          preloadStartTime = Date.now();
          preloadSounds(files, 0);
        }
      } catch (e) {
      }
    }
    let preloadScheduled = false;
    function scheduleSoundPreload() {
      if (preloadScheduled)
        return;
      preloadScheduled = true;
      let tries = 0;
      const tryGo = () => {
        tries++;
        try {
          const cc = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.Camera");
          const cam = cc.method("get_main").invoke();
          if (cam && !cam.isNull()) {
            preloadAllSoundsOnce();
            return;
          }
        } catch (e) {
        }
        if (tries >= 40) {
          preloadAllSoundsOnce();
          return;
        }
        setTimeout(tryGo, 1e3);
      };
      setTimeout(tryGo, 1e4);
    }
    scheduleSoundPreload();
    let preloadCompleted = 0;
    let preloadInFlight = 0;
    let preloadDoneAnnounced = false;
    const preloadConcurrency = 8;
    function preloadSounds(files, nextIndex) {
      if (nextIndex === 0) {
        preloadCompleted = 0;
        preloadInFlight = 0;
        preloadDoneAnnounced = false;
      }
      const launch = () => {
        while (preloadInFlight < preloadConcurrency && nextIndex < files.length) {
          const filePath = files[nextIndex];
          nextIndex++;
          preloadInFlight++;
          const doneOne = () => {
            preloadCompleted++;
            preloadInFlight--;
            if (preloadCompleted % 10 === 0 || preloadCompleted === files.length) {
              const elapsed = Math.max(1, Date.now() - preloadStartTime);
              const per = elapsed / preloadCompleted;
              const remaining = files.length - preloadCompleted;
              const etaSec = Math.ceil(per * remaining / 1e3);
              sendNotification("Preloading " + preloadCompleted + "/" + files.length + " sounds... ETA ~" + etaSec + "s", false, 2);
            }
            if (preloadCompleted >= files.length) {
              if (!preloadDoneAnnounced) {
                preloadDoneAnnounced = true;
                const elapsed = Math.max(1, Date.now() - preloadStartTime);
                const totalSec = (elapsed / 1e3).toFixed(1);
                console.log("[dbg] preload done " + files.length + " files in " + totalSec + "s");
                sendNotification("All " + files.length + " sounds preloaded in " + totalSec + "s", false);
              }
            } else if (nextIndex < files.length) {
              launch();
            }
          };
          if (soundboardCache.has(filePath)) {
            doneOne();
          } else {
            try {
              loadSoundFile(filePath, (sd) => {
                if (sd)
                  soundboardCache.set(filePath, sd);
                doneOne();
              });
            } catch (e) {
              doneOne();
            }
          }
        }
      };
      launch();
    }
    function normalizeSoundName(name) {
      return String(name).replace(/["']/g, "").trim().toLowerCase();
    }
    function findClipByName(desired) {
      try {
        const want = normalizeSoundName(desired);
        if (AudioSourceClass == null) {
          return null;
        }
        const check = (as) => {
          try {
            if (as == null || as.isNull())
              return null;
            const clip = as.method("get_clip").invoke();
            if (clip == null || clip.isNull())
              return null;
            const cn = String(clip.method("get_name").invoke().toString());
            const ncn = normalizeSoundName(cn);
            if (ncn === want || ncn.indexOf(want) !== -1) {
              cachedClickClip = clip;
              if (cachedClickSource == null || cachedClickSource.isNull())
                cachedClickSource = as;
              return clip;
            }
          } catch (e) {
          }
          return null;
        };
        const allSources = Object.method("FindObjectsOfType").overload("System.Type", "System.Boolean").invoke(AudioSourceClass.type.object, true);
        if (allSources != null) {
          for (let ai = 0; ai < allSources.length; ai++) {
            const r = check(allSources.get(ai));
            if (r != null && !r.isNull())
              return r;
          }
        }
      } catch (e) {
      }
      return null;
    }
    function scanForClickClip() {
      const clickCandidates = ["sparkerl", "startsparkel", "click", "cash-register-kaching-sound-effect-125042"];
      for (const candidate of clickCandidates) {
        const clip = findClipByName(candidate);
        if (clip != null && !clip.isNull()) {
          return clip;
        }
      }
      return null;
    }
    function playClickSound() {
      try {
        try {
          const larm = getLarMenu();
          if (larm != null && !larm.isNull()) {
            const clip = larm.field("buttonClickClip").value;
            if (clip != null && !clip.isNull()) {
              try {
                larm.method("PlayClip").invoke(clip);
                return true;
              } catch (e) {
              }
            }
          }
        } catch (e) {
        }
        if (cachedClickClip == null || cachedClickClip.isNull()) {
          const clip = scanForClickClip();
          if (clip == null || clip.isNull())
            return false;
          cachedClickClip = clip;
        }
        let src = getSoundPreviewSource();
        if (src == null || src.isNull())
          return false;
        try {
          src.method("get_gameObject").invoke().method("SetActive").invoke(true);
        } catch (e) {
        }
        try {
          src.method("set_enabled").invoke(true);
        } catch (e) {
        }
        try {
          src.method("Stop", 0).invoke();
        } catch (e) {
        }
        src.method("set_clip").invoke(cachedClickClip);
        src.method("set_time").invoke(0);
        src.method("set_volume").invoke(1);
        src.method("set_spatialBlend").invoke(0);
        src.method("set_loop").invoke(false);
        src.method("set_mute").invoke(false);
        let ok = false;
        try {
          src.method("Play").invoke();
          ok = true;
        } catch (e) {
          try {
            src.method("Play", 0).invoke();
            ok = true;
          } catch (e2) {
            try {
              src.method("Play", 0).invoke();
              ok = true;
            } catch (e3) {
            }
          }
        }
        if (!ok) {
          try {
            soundPreviewSource = null;
          } catch (e) {
          }
          const fresh = getSoundPreviewSource();
          if (fresh != null && !fresh.isNull()) {
            try {
              fresh.method("set_clip").invoke(cachedClickClip);
            } catch (e) {
            }
            try {
              fresh.method("set_volume").invoke(1);
            } catch (e) {
            }
            try {
              fresh.method("set_spatialBlend").invoke(0);
            } catch (e) {
            }
            try {
              fresh.method("set_mute").invoke(false);
            } catch (e) {
            }
            try {
              fresh.method("Play").invoke();
            } catch (e) {
            }
          }
        }
        return true;
      } catch (e) {
        return false;
      }
    }
    function playNamedClip(clipName) {
      try {
        const clip = findClipByName(clipName);
        if (clip == null || clip.isNull()) {
          return false;
        }
        let src = getSoundPreviewSource();
        if (src == null || src.isNull()) {
          return false;
        }
        try {
          src.method("Stop", 0).invoke();
        } catch (e) {
        }
        src.method("set_clip").invoke(clip);
        src.method("set_time").invoke(0);
        src.method("set_volume").invoke(1);
        src.method("set_spatialBlend").invoke(0);
        src.method("set_loop").invoke(false);
        src.method("set_mute").invoke(false);
        src.method("set_enabled").invoke(true);
        try {
          src.method("Play").invoke();
        } catch (e) {
          try {
            src.method("Play", 0).invoke();
          } catch (e2) {
            return false;
          }
        }
        return true;
      } catch (e) {
        return false;
      }
    }
    function dumpAllSounds() {
      const seen = /* @__PURE__ */ new Set();
      try {
        if (AudioSourceClass != null) {
          const scanList = (list) => {
            for (let ai = 0; ai < list.length; ai++) {
              try {
                const as = list.get(ai);
                if (as == null || as.isNull())
                  continue;
                const clip = as.method("get_clip").invoke();
                if (clip == null || clip.isNull())
                  continue;
                const cn = String(clip.method("get_name").invoke().toString());
                const go = as.method("get_gameObject").invoke();
                const gn = go != null && !go.isNull() ? String(go.method("get_name").invoke().toString()) : "?";
                const key = cn + "|" + gn;
                if (seen.has(key))
                  continue;
                seen.add(key);
                console.log('[SOUND] clip="' + cn + '" on="' + gn + '"');
              } catch (e) {
              }
            }
          };
          const allAs = findObjectsOfType(AudioSourceClass);
          if (allAs != null)
            scanList(allAs);
          const allInactive = Object.method("FindObjectsOfType").overload("System.Type", "System.Boolean").invoke(AudioSourceClass.type.object, true);
          if (allInactive != null)
            scanList(allInactive);
        }
      } catch (e) {
      }
      return seen.size;
    }
    function rejoinRoom() {
      Il2Cpp.perform(() => {
        try {
          let roomName = null;
          try {
            const cr = PhotonNetwork.method("get_CurrentRoom").invoke();
            if (cr != null && !cr.isNull())
              roomName = cr.method("get_Name").invoke();
          } catch (e) {
          }
          if (roomName == null || roomName.isNull() || !roomName.content) {
            sendNotification("No room to rejoin", false, 3);
            return;
          }
          const ok = PhotonNetwork.method("RejoinRoom", 1).invoke(roomName);
          sendNotification(ok ? "Rejoining " + roomName.content : "Rejoin failed", false, 3);
        } catch (e) {
          sendNotification("Rejoin error", false, 3);
        }
      });
    }
    function disconnectRoom() {
      Il2Cpp.perform(() => {
        try {
          PhotonNetwork.method("Disconnect").invoke();
          sendNotification("Disconnected", false, 3);
        } catch (e) {
          sendNotification("Disconnect failed", false, 3);
        }
      });
    }
    function joinRandomRoom() {
      Il2Cpp.perform(() => {
        try {
          if (PhotonVRManagerClass != null) {
            try {
              PhotonVRManagerClass.method("JoinRandomRoom").invoke(10);
              sendNotification("Joining random room...", false, 3);
              return;
            } catch (e) {
            }
          }
          const ok = PhotonNetwork.method("JoinRandomRoom", 0).invoke();
          console.log("[NET] JoinRandomRoom -> " + ok);
          sendNotification(ok ? "Joining random room..." : "JoinRandom failed", false, 3);
        } catch (e) {
          sendNotification("JoinRandom error", false, 3);
        }
      });
    }
    function getCorlibClassByName(name) {
      try {
        const c = Il2Cpp.corlib.class(name);
        if (c != null)
          return c;
      } catch (e) {
      }
      for (const asm of Il2Cpp.domain.assemblies) {
        try {
          const c = asm.image.class(name);
          if (c != null)
            return c;
        } catch (e) {
        }
      }
      return null;
    }
    function dumpAllAudioWavs() {
      const seen = /* @__PURE__ */ new Set();
      try {
        if (AudioSourceClass == null) {
          console.log("[SOUND] AudioSourceClass is null");
          return 0;
        }
        const allSources = Object.method("FindObjectsOfType").overload("System.Type", "System.Boolean").invoke(AudioSourceClass.type.object, true);
        if (allSources == null || allSources.length == 0) {
          console.log("[SOUND] No AudioSources found");
          return 0;
        }
        console.log("[SOUND] Found " + allSources.length + " AudioSources");
        for (let i = 0; i < allSources.length; i++) {
          try {
            const audioSource = allSources.get(i);
            if (audioSource == null || audioSource.isNull())
              continue;
            const clip = audioSource.method("get_clip").invoke();
            if (clip == null || clip.isNull())
              continue;
            const clipName = String(clip.method("get_name").invoke().toString());
            const gameObject = audioSource.method("get_gameObject").invoke();
            const goName = gameObject != null && !gameObject.isNull() ? String(gameObject.method("get_name").invoke().toString()) : "?";
            const key = clipName + "|" + goName;
            if (seen.has(key))
              continue;
            seen.add(key);
            console.log('[SOUND] clip="' + clipName + '" on="' + goName + '"');
          } catch (e) {
          }
        }
        console.log("[SOUND] Total unique sounds found: " + seen.size);
      } catch (e) {
        console.log("[SOUND] Error:", e);
      }
      return seen.size;
    }
    function ensureClickClip() {
      let tries = 0;
      const tryScan = () => {
        tries++;
        try {
          if (scanForClickClip() != null)
            return;
        } catch (e) {
        }
        if (tries < 60)
          setTimeout(tryScan, 1e3);
      };
      setTimeout(tryScan, 1e3);
    }
    ensureClickClip();
    function handleMenuButtonClick(goName) {
      const _time = Time.method("get_time").invoke();
      if (_time <= buttonClickDelay)
        return;
      buttonClickDelay = _time + 0.2;
      const button = getIndex(goName);
      if (button) {
        try {
          playClickSound();
        } catch (e) {
        }
        try {
          const prevCat = currentCategory, prevPage = currentPage;
          if (button.isTogglable) {
            button.enabled = !button.enabled;
            if (button.enabled) {
              if (button.toolTip)
                sendNotification("[ENABLE] " + button.toolTip, false);
              if (button.enableMethod) {
                try {
                  button.enableMethod();
                } catch (ee) {
                }
              }
            } else {
              if (button.toolTip)
                sendNotification("[DISABLE] " + button.toolTip, false);
              if (button.disableMethod) {
                try {
                  button.disableMethod();
                } catch (ee) {
                }
              }
            }
          } else {
            if (button.toolTip)
              sendNotification(button.toolTip, false);
            if (button.method) {
              try {
                button.method();
              } catch (ee) {
              }
            }
          }
          if (button.isTogglable || prevCat !== currentCategory || prevPage !== currentPage)
            reloadMenu();
        } catch (e) {
        }
      }
    }
    if (BaseButtonClass != null) {
      const ButtonActivation = BaseButtonClass.method("OnTriggerEnter");
      ButtonActivation.implementation = function(collider) {
        const rawName = this.method("get_name").invoke().toString();
        if (rawName.length > 1 && rawName[0] == "@") {
          if (referenceCollider != null && !referenceCollider.isNull() && collider.handle.equals(referenceCollider.handle)) {
            handleMenuButtonClick(rawName.substring(1));
            return;
          }
          return;
        }
        return this.method("OnTriggerEnter").invoke(collider);
      };
    }
    let commonUsageCache = null;
    let tryGetBoolOverload = null;
    let tryGetVec2Overload = null;
    let getDeviceAtXRNodeMethod = null;
    function updateInput() {
      try {
        if (commonUsageCache === null) {
          commonUsageCache = {};
          const names = ["primaryButton", "secondaryButton", "gripButton", "triggerButton", "primary2DAxisClick", "primary2DAxis"];
          for (const n of names) {
            try {
              commonUsageCache[n] = CommonUsages.field(n).value;
            } catch (e) {
            }
          }
          try {
            getDeviceAtXRNodeMethod = InputDevices.method("GetDeviceAtXRNode", 1);
          } catch (e) {
          }
          try {
            const d = getDeviceAtXRNodeMethod.invoke(4);
            if (d != null && !d.isNull()) {
              tryGetBoolOverload = d.method("TryGetFeatureValue", 2);
              tryGetVec2Overload = d.method("TryGetFeatureValue", 2).overload("UnityEngine.XR.InputFeatureUsage<UnityEngine.Vector2>", "UnityEngine.Vector2&");
            }
          } catch (e) {
          }
        }
        const leftDevice = getDeviceAtXRNodeMethod.invoke(4);
        const rightDevice = getDeviceAtXRNodeMethod.invoke(5);
        if (leftDevice == null || leftDevice.isNull() || rightDevice == null || rightDevice.isNull())
          return;
        const outBool = outBoolBuf === null ? outBoolBuf = Il2Cpp.alloc(1) : outBoolBuf;
        const t = tryGetBoolOverload;
        if (t == null)
          return;
        t.invoke(commonUsageCache["primaryButton"], outBool);
        leftPrimary = outBool.readU8() !== 0;
        t.invoke(commonUsageCache["secondaryButton"], outBool);
        leftSecondary = outBool.readU8() !== 0;
        t.invoke(commonUsageCache["gripButton"], outBool);
        leftGrab = outBool.readU8() !== 0;
        t.invoke(commonUsageCache["triggerButton"], outBool);
        leftTrigger = outBool.readU8() !== 0;
        t.invoke(commonUsageCache["primary2DAxisClick"], outBool);
        leftStick = outBool.readU8() !== 0;
        t.invoke(commonUsageCache["primaryButton"], outBool);
        rightPrimary = outBool.readU8() !== 0;
        t.invoke(commonUsageCache["secondaryButton"], outBool);
        rightSecondary = outBool.readU8() !== 0;
        t.invoke(commonUsageCache["triggerButton"], outBool);
        rightTrigger = outBool.readU8() !== 0;
        t.invoke(commonUsageCache["gripButton"], outBool);
        rightGrab = outBool.readU8() !== 0;
        t.invoke(commonUsageCache["primary2DAxisClick"], outBool);
        rightStick = outBool.readU8() !== 0;
        const v = tryGetVec2Overload;
        v.invoke(commonUsageCache["primary2DAxis"], ensureOutAxis());
        rightAxis = [outAxis.readFloat(), outAxis.add(4).readFloat()];
        v.invoke(commonUsageCache["primary2DAxis"], ensureOutAxis());
        leftAxis = [outAxis.readFloat(), outAxis.add(4).readFloat()];
      } catch (e) {
      }
    }
    if (PlayerClass) {
      PlayerClass.method("Update").implementation = function() {
        GTPlayer = this;
        try {
          leftHandTransform = this.field("leftHandTransform").value;
          rightHandTransform = this.field("rightHandTransform").value;
          headCollider = this.field("headCollider").value;
          bodyCollider = this.field("bodyCollider").value;
        } catch (_) {
        }
        if (!UberShader || UberShader.isNull()) {
          try {
            UberShader = Shader.method("Find").invoke(Il2Cpp.string("Universal Render Pipeline/Unlit"));
            if (!UberShader || UberShader.isNull()) {
              UberShader = Shader.method("Find").invoke(Il2Cpp.string("Unlit/Color"));
            }
            TextShader = Shader.method("Find").invoke(Il2Cpp.string("UI/Default"));
            if (!TextShader || TextShader.isNull()) {
              TextShader = Shader.method("Find").invoke(Il2Cpp.string("UI/Default (1)"));
            }
            zeroVector = Vector3.field("zeroVector").value;
            oneVector = Vector3.field("oneVector").value;
            identityQuaternion = Quaternion.field("identityQuaternion").value;
            try {
              arial = Resources.method("GetBuiltinResource").overload("System.Type", "System.String").invoke(Font.type.object, Il2Cpp.string("Arial.ttf"));
              if (!arial || arial.isNull()) {
                arial = Resources.method("GetBuiltinResource").overload("System.Type", "System.String").invoke(Font.type.object, Il2Cpp.string("LegacyRuntime.ttf"));
              }
            } catch (_) {
            }
            if (!arial || arial.isNull()) {
              try {
                const allFonts = Object.method("FindObjectsOfType").overload("System.Type").invoke(Font.type.object);
                if (allFonts != null) {
                  for (let fi = 0; fi < allFonts.length; fi++) {
                    try {
                      const f = allFonts.get(fi);
                      if (f != null && !f.isNull()) {
                        arial = f;
                        break;
                      }
                    } catch (e2) {
                    }
                  }
                }
              } catch (_) {
              }
            }
            if (!arial || arial.isNull()) {
              try {
                arial = Font.method("CreateDynamicFontFromOSFont", 2).invoke(Il2Cpp.string("Roboto"), 16);
              } catch (_) {
              }
            }
            if (!arial || arial.isNull()) {
              try {
                arial = Font.method("CreateDynamicFontFromOSFont", 2).invoke(Il2Cpp.string("sans-serif"), 16);
              } catch (_) {
              }
            }
          } catch (_) {
          }
        }
        deltaTime = Time.method("get_deltaTime").invoke();
        time = Time.method("get_time").invoke();
        if (menuInitTime === 0) {
          menuInitTime = time;
        }
        if (time - menuInitTime < 5) {
          this.method("Update").invoke();
          return;
        }
        updateInput();
        frameCount++;
        if (time - lastGameObjectRefresh > 5) {
          lastGameObjectRefresh = time;
          try {
            refreshGameObjects();
          } catch (e) {
          }
        }
        try {
          if (cachedHookPlayerHandle == null || cachedHookPlayerHandle !== this.handle) {
            cachedHookPlayerHandle = this.handle;
            try {
              refreshGameObjects();
            } catch (e) {
            }
          }
        } catch (e) {
        }
        if (spamSpawnOn && time - lastFunnelApply > 0.25) {
          lastFunnelApply = time;
          try {
            const l = getLarMenu();
            if (l != null && !l.isNull()) {
              if (spamSpawnMethod === null) {
                try {
                  spamSpawnMethod = l.method("Handle_SpamSpawn");
                } catch (e) {
                }
              }
              if (spamSpawnMethod != null)
                spamSpawnMethod.invoke();
            }
          } catch (e) {
          }
        }
        if (agFunnelOn && time - lastFunnelApply > 0.25) {
          lastFunnelApply = time;
          try {
            const l = getLarMenu();
            if (l != null && !l.isNull()) {
              if (agFunnelMethod === null) {
                try {
                  agFunnelMethod = l.method("Handle_AgFunnel");
                } catch (e) {
                }
              }
              if (agFunnelMethod != null)
                agFunnelMethod.invoke();
            }
          } catch (e) {
          }
        }
        if (espOn && time - lastEspApply > 0.25) {
          lastEspApply = time;
          try {
            const l = getLarMenu();
            if (l != null && !l.isNull()) {
              if (espMethod === null) {
                try {
                  espMethod = l.method("Handle_Visuals");
                } catch (e) {
                }
              }
              if (espMethod != null)
                espMethod.invoke();
            }
          } catch (e) {
          }
        }
        if (rgbColorEnabled && time - lastRgbApply > 0.25) {
          lastRgbApply = time;
          try {
            setLocalColor(hsvToRgb(time * 90 % 360, 1, 1));
          } catch (e) {
          }
        }
        if (hearMyselfEnabled && time - lastHearMyselfApply > 1) {
          lastHearMyselfApply = time;
          try {
            applyHearMyself();
          } catch (e) {
          }
        }
        if (hearMyselfEnabled && time - lastHearMyselfDump > 5) {
          lastHearMyselfDump = time;
          try {
            const r = getRecorder();
            dumpRecorderState(r, "periodic");
          } catch (e) {
            console.log("[VOICE] periodic dump error: " + e);
          }
        }
        if (strobeEnabled && time - lastStrobeTime > 0.1) {
          lastStrobeTime = time;
          const strobeState = Math.floor(time / 0.1) % 2;
          try {
            setLocalColor(hsvToRgb(0, 0, strobeState ? 1 : 0));
          } catch (e) {
          }
        }
        if (righthand && rightSecondary || !righthand && leftSecondary) {
          if (currentNotification != "" && time > notifactionResetTime)
            reloadMenu();
          if (menu == null) {
            try {
              renderMenu();
            } catch (e) {
              if (e.stack)
                try {
                  if (menu != null) {
                    Destroy(menu);
                  }
                } catch (e2) {
                }
              menu = null;
            }
          } else {
            try {
              if (frameCount % 2 === 0)
                recenterMenu();
            } catch (e) {
              if (e.stack) {
              }
            }
          }
        } else {
          if (menu != null) {
            try {
              Destroy(menu);
            } catch (e) {
            }
            menu = null;
          }
        }
        if (menu == null) {
          if (reference != null) {
            try {
              Destroy(reference);
            } catch (e) {
            }
            reference = null;
          }
        } else {
          if (reference == null) {
            try {
              renderReference();
            } catch (e) {
              if (e.stack) {
              }
            }
          }
        }
        try {
          if (menu != null && reference != null && !reference.isNull() && clickableButtons.length > 0) {
            const _time = Time.method("get_time").invoke();
            if (_time > buttonClickDelay && _time - lastClickScan > 0.05) {
              lastClickScan = _time;
              const refPos = getTransform(reference).method("get_position").invoke();
              let hits = null;
              try {
                hits = Physics.method("OverlapSphere", 4).invoke(refPos, 0.03, -1, 2);
              } catch (e6) {
              }
              if (hits != null && !hits.isNull()) {
                for (let hi = 0; hi < hits.length; hi++) {
                  try {
                    const hitCol = hits.get(hi);
                    if (hitCol == null || hitCol.isNull())
                      continue;
                    for (const cb of clickableButtons) {
                      try {
                        if (cb.collider != null && !cb.collider.isNull() && hitCol.handle.equals(cb.collider.handle)) {
                          handleMenuButtonClick(cb.name);
                          break;
                        }
                      } catch (e7) {
                      }
                    }
                    if (Time.method("get_time").invoke() <= buttonClickDelay)
                      break;
                  } catch (e8) {
                  }
                }
              }
            }
          }
        } catch (e5) {
        }
        try {
          frameFlingQueue();
        } catch (e) {
        }
        try {
          if (gunRenderedLastFrame) {
            gunRenderedLastFrame = false;
          } else {
            if (GunPointer != null) {
              if (!GunPointer.method("get_activeSelf").invoke()) {
                Destroy(GunPointer);
                GunPointer = null;
              } else
                GunPointer.method("SetActive").invoke(false);
            }
            if (GunLine != null) {
              let lineObj = GunLine.method("get_gameObject").invoke();
              if (lineObj != null) {
                if (!lineObj.method("get_activeSelf").invoke()) {
                  Destroy(lineObj);
                  GunLine = null;
                } else
                  lineObj.method("SetActive").invoke(false);
              }
            }
          }
        } catch {
        }
        if (menuCanvas && !menuCanvas.isNull()) {
          try {
            if (cameraClassCache === null) {
              try {
                cameraClassCache = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image.class("UnityEngine.Camera");
              } catch (_) {
              }
            }
            if (cameraClassCache != null) {
              const mc = cameraClassCache.method("get_main").invoke();
              if (mc && !mc.isNull())
                menuCanvas.method("set_worldCamera").invoke(mc);
            }
          } catch (_) {
          }
        }
        buttons.flat().filter((b) => b.enabled).forEach((b) => {
          if (b.method) {
            try {
              b.method();
            } catch (e) {
              console.error(`[Update] Error in '${b.buttonText}':`, e);
            }
          }
        });
        this.method("Update").invoke();
        try {
          flyPostUpdate();
        } catch (e) {
        }
        try {
          flyAPostUpdate();
        } catch (e) {
        }
        try {
          rtFlyPostUpdate();
        } catch (e) {
        }
        try {
          longArmsPostUpdate();
        } catch (e) {
        }
      };
    } else {
    }
    console.log(`
                          _              
   _____  __   ___  _ __ | |_ ___  _ __  
  / _  / /  / _ | '_ | __/ _ | '_  
 |  __/>  <  | (_) | | | | || (_) | |_) |
  ___/_/_  ___/|_| |_|_____/| .__/ 
                                  |_|
        `);
  });
  Il2Cpp.perform(() => {
    try {
      let getUrlFromRequest2 = function(request) {
        if (!request || request.isNull())
          return "unknown";
        try {
          const stored = requestInfo.get(request.handle.toString());
          if (stored && stored.url)
            return stored.url;
        } catch (e) {
        }
        if (helpUrlAttribute) {
          try {
            const urlAttrFields = ["m_HelpURL", "helpURL", "m_Attribute", "attribute"];
            for (const fieldName of urlAttrFields) {
              try {
                const field = request.tryField(fieldName);
                if (field) {
                  const val = field.value;
                  if (val && !val.isNull()) {
                    try {
                      const urlField = val.tryField("m_Url");
                      if (urlField) {
                        const urlVal = urlField.value;
                        if (urlVal && !urlVal.isNull() && urlVal.content) {
                          return urlVal.content;
                        }
                      }
                    } catch (e) {
                    }
                    try {
                      const getUrlMethod = val.tryMethod("get_URL");
                      if (getUrlMethod && !getUrlMethod.virtualAddress.isNull()) {
                        const result = getUrlMethod.invoke();
                        if (result && !result.isNull() && result.content) {
                          return result.content;
                        }
                      }
                    } catch (e) {
                    }
                  }
                }
              } catch (e) {
              }
            }
          } catch (e) {
          }
        }
        const fieldNames = [
          "m_Uri",
          "uri",
          "url",
          "m_url",
          "_url",
          "m_Path",
          "path",
          "m_WebRequest",
          "webRequest",
          "m_Address",
          "address",
          "m_OriginalURL",
          "originalURL",
          "m_Url",
          "Url",
          "m_URL",
          "URL"
        ];
        for (const fieldName of fieldNames) {
          try {
            const field = request.tryField(fieldName);
            if (field) {
              const val = field.value;
              if (val && !val.isNull()) {
                if (val.content !== void 0) {
                  const content = val.content;
                  if (content && content.length > 0) {
                    if (content.includes("playfabapi.com") || content.includes("pythonanywhere.com") || content.startsWith("http://") || content.startsWith("https://")) {
                    }
                  }
                }
              }
            }
          } catch (e) {
          }
        }
        try {
          const method = request.tryMethod("get_url");
          if (method && !method.virtualAddress.isNull()) {
            const result = method.invoke();
            if (result && !result.isNull() && result.content) {
              return result.content;
            }
          }
        } catch (e) {
        }
        try {
          const handle = request.handle;
          for (let offset = 0; offset < 512; offset += 4) {
            try {
              const ptr = handle.add(offset).readPointer();
              if (!ptr.isNull()) {
                const str = ptr.readCString(256);
                if (str) {
                  if (str.includes("playfabapi.com") || str.includes("pythonanywhere.com") || str.startsWith("http://") || str.startsWith("https://")) {
                    const match = str.match(/https?:\/\/[^\s]+/);
                    if (match) {
                      return match[0];
                    }
                    return str;
                  }
                }
              }
            } catch (e) {
            }
          }
        } catch (e) {
        }
        return "unknown";
      }, getMethod2 = function(request) {
        if (!request || request.isNull())
          return "UNKNOWN";
        try {
          const stored = requestInfo.get(request.handle.toString());
          if (stored && stored.method)
            return stored.method.toUpperCase();
        } catch (e) {
        }
        const methodFields = ["m_Method", "method", "_method", "m_HttpMethod", "httpMethod"];
        for (const fieldName of methodFields) {
          try {
            const field = request.tryField(fieldName);
            if (field) {
              const val = field.value;
              if (val && !val.isNull() && val.content) {
                return val.content.toUpperCase();
              }
            }
          } catch (e) {
          }
        }
        try {
          const method = request.tryMethod("get_method");
          if (method && !method.virtualAddress.isNull()) {
            const result = method.invoke();
            if (result && !result.isNull() && result.content) {
              return result.content.toUpperCase();
            }
          }
        } catch (e) {
        }
        try {
          const uploadField = request.tryField("m_UploadHandler") || request.tryField("uploadHandler");
          if (uploadField) {
            const upload = uploadField.value;
            if (upload && !upload.isNull()) {
              return "POST";
            }
          }
        } catch (e) {
        }
        return "GET";
      }, getRequestBody2 = function(uploadHandler) {
        if (!uploadHandler || uploadHandler.isNull())
          return null;
        try {
          const captured = uploadHandlerBody.get(uploadHandler.handle.toString());
          if (captured)
            return captured;
        } catch (e) {
        }
        try {
          const dataField = uploadHandler.tryField("m_Data");
          if (dataField) {
            const data = dataField.value;
            if (data && !data.isNull()) {
              return data.content;
            }
          }
        } catch (e) {
        }
        try {
          const dataField = uploadHandler.tryField("data");
          if (dataField) {
            const data = dataField.value;
            if (data && !data.isNull()) {
              return data.content;
            }
          }
        } catch (e) {
        }
        return null;
      }, getResponseBody2 = function(downloadHandler) {
        if (!downloadHandler || downloadHandler.isNull())
          return null;
        try {
          const getTextMethod = downloadHandler.tryMethod("get_text");
          if (getTextMethod && !getTextMethod.virtualAddress.isNull()) {
            const result = getTextMethod.invoke();
            if (result && !result.isNull()) {
              return result.content;
            }
          }
        } catch (e) {
        }
        try {
          const dataField = downloadHandler.tryField("m_Data");
          if (dataField) {
            const data = dataField.value;
            if (data && !data.isNull()) {
              return data.content;
            }
          }
        } catch (e) {
        }
        return null;
      }, bytesToString2 = function(arr) {
        if (!arr || arr.isNull())
          return null;
        try {
          const n = arr.length;
          if (n === 0)
            return "";
          let s = "";
          for (let i = 0; i < n; i++) {
            const b = arr.get(i);
            s += String.fromCharCode(b);
          }
          return s;
        } catch (e) {
          return null;
        }
      }, getByteElementClass2 = function() {
        if (byteElementClass && !byteElementClass.isNull())
          return byteElementClass;
        const candidates = ["System.Private.CoreLib", "mscorlib", "System.Runtime", "netstandard"];
        for (const an of candidates) {
          try {
            const asm = Il2Cpp.domain.assembly(an);
            if (asm) {
              const k = asm.image.class("System.Byte");
              if (k) {
                byteElementClass = k;
                return k;
              }
            }
          } catch (e) {
          }
        }
        try {
          for (const asm of Il2Cpp.domain.assemblies) {
            try {
              const k = asm.image.class("System.Byte");
              if (k) {
                byteElementClass = k;
                return k;
              }
            } catch (e) {
            }
          }
        } catch (e) {
        }
        return null;
      }, strToBytes2 = function(str) {
        const cls = getByteElementClass2();
        if (!cls)
          throw new Error("could not resolve System.Byte class");
        const bytes = [];
        for (let i = 0; i < str.length; i++)
          bytes.push(str.charCodeAt(i) & 255);
        return Il2Cpp.array(cls, bytes);
      }, newUploadHandlerFromString2 = function(str) {
        const klass = unityWebRequestModule.class("UnityEngine.Networking.UploadHandlerRaw");
        const inst = klass.alloc();
        const array = strToBytes2(str);
        inst.method(".ctor", ["System.Byte[]"]).invoke(array);
        return inst;
      };
      var getUrlFromRequest = getUrlFromRequest2, getMethod = getMethod2, getRequestBody = getRequestBody2, getResponseBody = getResponseBody2, bytesToString = bytesToString2, getByteElementClass = getByteElementClass2, strToBytes = strToBytes2, newUploadHandlerFromString = newUploadHandlerFromString2;
      let helpUrlAttribute = null;
      try {
        const coreModule = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image;
        helpUrlAttribute = coreModule.class("UnityEngine.HelpURLAttribute");
      } catch (e) {
      }
      let unityWebRequestModule = null;
      let unityWebRequest = null;
      let downloadHandlerBuffer = null;
      try {
        unityWebRequestModule = Il2Cpp.domain.assembly("UnityEngine.UnityWebRequestModule").image;
        unityWebRequest = unityWebRequestModule.class("UnityEngine.Networking.UnityWebRequest");
        downloadHandlerBuffer = unityWebRequestModule.class("UnityEngine.Networking.DownloadHandlerBuffer");
      } catch (e) {
      }
      if (!unityWebRequest || unityWebRequest.isNull())
        return;
      const requestData = /* @__PURE__ */ new Map();
      const requestInfo = /* @__PURE__ */ new Map();
      const uploadHandlerBody = /* @__PURE__ */ new Map();
      try {
        const setUrlMethod = unityWebRequest.tryMethod("set_url");
        if (setUrlMethod && !setUrlMethod.virtualAddress.isNull()) {
          setUrlMethod.implementation = function(urlVal) {
            try {
              const key = this.handle.toString();
              let info = requestInfo.get(key) || {};
              info.url = urlVal && !urlVal.isNull() ? urlVal.content : void 0;
              requestInfo.set(key, info);
            } catch (e) {
            }
            return this.method("set_url").invoke(urlVal);
          };
        }
      } catch (e) {
      }
      try {
        const setMethodMethod = unityWebRequest.tryMethod("set_method");
        if (setMethodMethod && !setMethodMethod.virtualAddress.isNull()) {
          setMethodMethod.implementation = function(methodVal) {
            try {
              const key = this.handle.toString();
              let info = requestInfo.get(key) || {};
              info.method = methodVal && !methodVal.isNull() ? methodVal.content : void 0;
              requestInfo.set(key, info);
            } catch (e) {
            }
            return this.method("set_method").invoke(methodVal);
          };
        }
      } catch (e) {
      }
      try {
        const internalSetUrl = unityWebRequest.tryMethod("InternalSetUrl");
        if (internalSetUrl && !internalSetUrl.virtualAddress.isNull()) {
          internalSetUrl.implementation = function(urlVal) {
            try {
              const key = this.handle.toString();
              let info = requestInfo.get(key) || {};
              info.url = urlVal && !urlVal.isNull() ? urlVal.content : void 0;
              requestInfo.set(key, info);
            } catch (e) {
            }
            return this.method("InternalSetUrl").invoke(urlVal);
          };
        }
      } catch (e) {
      }
      const methodNames = ["GET", "POST", "PUT", "HEAD", "CREATE", "DELETE"];
      try {
        const setCustomMethod = unityWebRequest.tryMethod("SetCustomMethod");
        if (setCustomMethod && !setCustomMethod.virtualAddress.isNull()) {
          setCustomMethod.implementation = function(methodVal) {
            try {
              const key = this.handle.toString();
              let info = requestInfo.get(key) || {};
              info.method = methodVal && !methodVal.isNull() ? methodVal.content : void 0;
              requestInfo.set(key, info);
            } catch (e) {
            }
            return this.method("SetCustomMethod").invoke(methodVal);
          };
        }
      } catch (e) {
      }
      try {
        const setMethodEnum = unityWebRequest.tryMethod("InternalSetMethod");
        if (setMethodEnum && !setMethodEnum.virtualAddress.isNull()) {
          setMethodEnum.implementation = function(type) {
            let resolved = null;
            try {
              let idx = parseInt(type.value, 10);
              if (Number.isInteger(idx) && idx >= 0 && idx < 3) {
                resolved = methodNames[idx];
              }
            } catch (e) {
            }
            if (resolved) {
              try {
                const key = this.handle.toString();
                let info = requestInfo.get(key) || {};
                info.method = resolved;
                requestInfo.set(key, info);
              } catch (e) {
              }
            }
            return this.method("InternalSetMethod").invoke(type);
          };
        }
      } catch (e) {
      }
      try {
        const uploadHandlerRawModule = unityWebRequestModule.class("UnityEngine.Networking.UploadHandlerRaw");
        const ctor = uploadHandlerRawModule.method(".ctor", ["System.Byte[]"]);
        if (ctor && !ctor.virtualAddress.isNull()) {
          ctor.implementation = function(data) {
            try {
              const body = bytesToString2(data);
              if (body) {
                uploadHandlerBody.set(this.handle.toString(), body);
              }
            } catch (e) {
            }
            return this.method(".ctor", ["System.Byte[]"]).invoke(data);
          };
        }
      } catch (e) {
      }
      let byteElementClass = null;
      const downloadHandlerClass = unityWebRequestModule.class("UnityEngine.Networking.DownloadHandler");
      try {
        const gt = downloadHandlerClass.tryMethod("get_text");
        if (gt && !gt.virtualAddress.isNull()) {
          gt.implementation = function() {
            return this.method("get_text").invoke();
          };
        }
      } catch (e) {
      }
      try {
        const gd = downloadHandlerClass.tryMethod("get_data");
        if (gd && !gd.virtualAddress.isNull()) {
          gd.implementation = function() {
            return this.method("get_data").invoke();
          };
        }
      } catch (e) {
      }
      try {
        const sendMethod = unityWebRequest.tryMethod("SendWebRequest");
        if (sendMethod && !sendMethod.virtualAddress.isNull()) {
          sendMethod.implementation = function() {
            const url = getUrlFromRequest2(this);
            const method = getMethod2(this);
            let uploadHandler = null;
            let requestBody = null;
            try {
              const uploadField = this.tryField("m_UploadHandler") || this.tryField("uploadHandler");
              if (uploadField) {
                uploadHandler = uploadField.value;
                if (uploadHandler && !uploadHandler.isNull()) {
                  requestBody = getRequestBody2(uploadHandler);
                }
              }
            } catch (e) {
            }
            const requestId = this.handle.toString();
            requestData.set(requestId, {
              url,
              method,
              requestBody,
              startTime: Date.now()
            });
            return this.method("SendWebRequest").invoke();
          };
        }
      } catch (e) {
      }
      try {
        const getResultMethod = unityWebRequest.tryMethod("get_result");
        if (getResultMethod && !getResultMethod.virtualAddress.isNull()) {
          getResultMethod.implementation = function() {
            const result = this.method("get_result").invoke();
            const requestId = this.handle.toString();
            const reqData = requestData.get(requestId);
            if (reqData) {
              requestData.delete(requestId);
              requestInfo.delete(requestId);
            }
            return result;
          };
        }
      } catch (e) {
      }
    } catch (e) {
    }
  }, "logger");
}
var libHookReady = false;
function tryHookLibil2cppFunction(functionName) {
  const libil2cpp = Process.findModuleByName("libil2cpp.so");
  if (!libil2cpp) {
    return;
  }
  const exportAddress = libil2cpp.findExportByName(functionName);
  if (!exportAddress) {
    return;
  }
  Interceptor.attach(exportAddress, {
    onEnter(args) {
      if (!hooksInstalled) {
        hooksInstalled = true;
        Hooks();
      }
    }
  });
  libHookReady = true;
}
(function waitForLib() {
  tryHookLibil2cppFunction(thngtohook);
  if (libHookReady)
    return;
  const t = setInterval(() => {
    if (libHookReady) {
      clearInterval(t);
      return;
    }
    tryHookLibil2cppFunction(thngtohook);
  }, 250);
})();
(function fallbackHooks() {
  let attempts = 0;
  const tryGo = () => {
    attempts++;
    if (hooksInstalled)
      return;
    if (!Process.findModuleByName("libil2cpp.so")) {
      if (attempts < 200)
        setTimeout(tryGo, 500);
      return;
    }
    try {
      Il2Cpp.perform(() => {
        if (hooksInstalled)
          return;
        try {
          if (!Il2Cpp.domain || !Il2Cpp.domain.assemblies || Il2Cpp.domain.assemblies.length === 0)
            return;
          const asm = Il2Cpp.domain.assembly("LethalApe.Game") || Il2Cpp.domain.assembly("Assembly-CSharp");
          if (!asm)
            return;
          hooksInstalled = true;
          Hooks();
          setTimeout(() => {
          }, 1e3);
        } catch (e) {
          console.error("[OGFMH] fallback Hooks() error: " + e);
        }
      });
    } catch (e) {
    }
    if (attempts < 200)
      setTimeout(tryGo, 500);
  };
  setTimeout(tryGo, 5e3);
})();


